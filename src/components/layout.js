import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../assets/style/layout.css'

class Layout extends React.Component {
  render() {
    const {
      data,
      title,
      children
    } = this.props;

    const {
      title: siteTitle,
      description,
      keywords,
      author
    } = data.site.siteMetadata;

    return (
      <div className="layout">
        <Helmet
          title={title || siteTitle}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: author }
          ]}
        >
          <html lang="zh" />
        </Helmet>

        <Header title={author} />
        <div className="layout__content">
          {children}
        </div>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
          }
          pathPrefix
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);
