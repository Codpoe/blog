import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ShortPost from '../components/short-post';

class BlogPage extends React.Component {
  render() {
    const { site, allMarkdownRemark: allMd } = this.props.data;
    const { edges: posts } = allMd;
    const { pageNum, skip } = this.props.pageContext;

    console.log('prefix', pageNum, skip + 1);

    return (
      <Layout>
        {posts.map(({ node }) => (
          <ShortPost
            frontmatter={node.frontmatter}
            excerpt={node.excerpt}
            key={node.id}
          />
        ))}
      </Layout>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query($skip: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 8,
      skip: $skip
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            slug
            title
            date(formatString: "MMM Do, YYYY")
            img
          }
        }
      }
    }
  }
`;
