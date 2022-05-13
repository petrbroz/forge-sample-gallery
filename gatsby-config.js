module.exports = {
  siteMetadata: {
    title: 'Forge Sample Gallery',
    description: 'Collection of sample applications built with Autodesk Forge',
    siteUrl: 'https://forge-sample-gallery.autodesk.io'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'samples',
        path: `${__dirname}/samples`,
      }
    },
    'gatsby-transformer-json'
  ]
};