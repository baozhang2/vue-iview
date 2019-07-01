module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  lintOnSave: true,
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy:{
      '/api':{
        target:'http://rz.talkingcake.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: "@",
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        utils: "@/utils",
        api: "@/api/api"
      }
    }
  }
};
