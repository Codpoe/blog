module.exports = {
  siteMetadata: {
    title: 'Codpoe 的个人网站',
    description: 'Codpoe 的个人博客',
    keywords: '个人网站 博客 随意',
    author: 'Codpoe',
    pageSize: 1
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source',
        path: `${__dirname}/src/source/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss'
  ],
};
