module.exports = {
  configureWebpack : {
    resolve:{
      alias:{
        'assets' : '@/assets',
        'components' : '@/components',
        'common' : '@/common',
        'network' : '@/network',
        'views' : '@/views'
        //@是默认配置过的别名，router和store是不需要配置的，因为只在main.js引用并且在任何组件通过this.$可以引用
      }
    },
  }
}
