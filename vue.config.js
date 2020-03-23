module.exports = {
  publicPath: process.env.VUE_APP_ENV === 'prod'
    ? '/TodoApp/'
    : '/',
  outputDir: process.env.VUE_APP_ENV === 'prod'
    ? 'prod'
    : 'dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/assets/css/main.sass';`
      }
    }
  },
  pwa: {
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