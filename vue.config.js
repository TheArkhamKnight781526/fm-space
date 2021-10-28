module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/SCSS/_variables.scss";
                `,
      },
    },
  },
};
