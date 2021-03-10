import nProgress from 'nprogress';
import type { Router } from 'vue-router';

export function createProgressGuard(router: Router) {
  router.beforeEach(async () => {
    nProgress.start();
    return true;
  });

  router.afterEach(async () => {
    nProgress.done();
    return true;
  });
}
