/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { GraphQLString } = require('gatsby/graphql');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPage = path.resolve('src/pages/blog.js');
  const postPage = path.resolve('src/pages/post.js');

  return graphql(`
    {
      site {
        siteMetadata {
          pageSize
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              slug
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const { pageSize = 8 } = res.data.site.siteMetadata;
    const {edges: posts } = res.data.allMarkdownRemark;
    const pageNum = Math.ceil(posts.length / pageSize);

    // create blog page
    Array.from({ length: pageNum }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/blog' : `/blog/${i + 1}`,
        component: blogPage,
        context: {
          pageNum,
          skip: i * pageSize
        }
      });

      if (i === 0) {
        createPage({
          path: '/blog/1',
          component: blogPage,
          context: {
            pageNum,
            skip: 0
          }
        });
      }
    })

    // create post page
    posts.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: `/post/${slug}`,
        component: postPage,
        context: {
          slug
        }
      });
    });
  });
};
