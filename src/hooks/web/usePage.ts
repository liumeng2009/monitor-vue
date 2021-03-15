import { PageEnum } from '@/enums/pageEnum';
import router from '@/router';

function handleError(e: Error) {
  console.error(e);
}

export function useGo() {
  const { push, replace } = router;

  function go(opt: PageEnum | string = PageEnum.BASE_HOME, isReplace = false) {
    if (!opt) return;
    isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
  }
  return go;
}
