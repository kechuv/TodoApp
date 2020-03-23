module.exports = {
  publicPath: process.env.VUE_APP_ENV === 'prod'
    ? '/TodoApp/'
    : '/',
  outputDir: process.env.VUE_APP_ENV === 'prod'
    ? 'dist_prod'
    : 'dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/assets/css/main.sass';`
      }
    }
  },
  pwa: {
    themeColor: '#fafafa',
    msTileColor: '#fafafa',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};