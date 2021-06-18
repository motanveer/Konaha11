module.exports = {
  siteMetadata: {
    title: "Konaha",
  },
  plugins: [ `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,{
    
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }, {
    resolve: `gatsby-plugin-google-fonts`,
    options:{
      fonts: [
        'rubik\:500,700'
      ],
      display:'swap',
    },
    }
],
};
