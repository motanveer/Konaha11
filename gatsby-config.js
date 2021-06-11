module.exports = {
  siteMetadata: {
    title: "Konaha",
  },
  plugins: [{
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }],
};
