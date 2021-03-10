// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const WebpackBar = require('webpackbar');
const vueConfig = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH + '/',

  configureWebpack: {
    plugins: [new WebpackBar()]
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/styles/config.less')       }";`
        },
        javascriptEnabled: true
      },
    }
  },

  devServer: {
    port: 8000
  },

  productionSourceMap: false,
  lintOnSave: true,

  transpileDependencies: []
};
module.exports = vueConfig;
