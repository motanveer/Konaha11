module.exports = {
  siteMetadata: {
    title: "Konaha",
  },
  plugins: [ `gatsby-plugin-image`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, {
    resolve: `gatsby-plugin-google-fonts`,
    options:{
      fonts: [
        'rubik\:500,700',
        'archivo\:400'
      ],
      display:'swap',
    },
    }
],
};
