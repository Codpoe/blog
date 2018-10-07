import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ShortPost from '../components/ShortPost';
import Pagination from '../components/Pagination';
import '../assets/style/blog.css';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.pageContext.skip + 1
    };
  }

  handlePageChange = page => {
    this.setState({ page });
    this.props.navigate(`/blog/${page}`);
  }

  render() {
    const { site, allMarkdownRemark: allMd } = this.props.data;
    const { edges: posts } = allMd;
    const { pageNum } = this.props.pageContext;
    const { page } = this.state;

    return (
      <Layout>
        {posts.map(({ node }) => (
          <ShortPost
            frontmatter={node.frontmatter}
            excerpt={node.excerpt}
            key={node.id}
          />
        ))}

        <div className="blog__pagination">
          <Pagination
            total={pageNum}
            value={page}
            onChange={this.handlePageChange}
          />
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query($limit: Int, $skip: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: $limit,
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
