import { GlobConfig } from '@/types/config';
const ENV = process.env;
const { VUE_APP_NAME, VUE_APP_TITLE } = ENV;

export const useGlobSetting = () => {
  const glob: Readonly<GlobConfig> = {
    name: VUE_APP_NAME,
    title: VUE_APP_TITLE,
  };
  return glob;
};
