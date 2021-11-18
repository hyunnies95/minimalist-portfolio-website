module.exports = {
  publicPath: '/minimalist-portfolio-website/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/styles.sass";`
      }
    }
  }
};