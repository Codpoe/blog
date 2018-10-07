import React from 'react';
import { graphql } from 'gatsby';

class PostPage extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }}></div>
    );
  }
}

export default PostPage;

export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
