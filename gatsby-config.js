module.exports = {
  pathPrefix: '/forge-sample-gallery',
  siteMetadata: {
    title: 'Forge Sample Gallery',
    description: 'Collection of sample applications built with Autodesk Forge',
    siteUrl: 'https://forge-sample-gallery.autodesk.io'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'samples',
        path: `${__dirname}/samples`,
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'SamplesJson',
        imagePath: 'screenshotUrl'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-WQKPTQ9XE4'
        ]
      }
    }
  ]
};