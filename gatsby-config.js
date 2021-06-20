module.exports = {
  siteMetadata: {
    title: "Konaha Teams",
  },
  plugins: [ `gatsby-plugin-image`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-mdx`,
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
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `profiles`,
        path: `${__dirname}/src/data`,
      }
    }
],
};
