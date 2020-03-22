module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TodoApp/'
    : '/',
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