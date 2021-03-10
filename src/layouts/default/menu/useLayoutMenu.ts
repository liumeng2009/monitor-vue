import { asyncRoutes } from '@/router/routes';
import { ref } from 'vue';
import { Menu } from '@/router/types';

export function useMenu() {
  const menuRef = ref<Menu[]>([]);
  menuRef.value = asyncRoutes;
  console.log(menuRef);
  return { menuRef };
}
