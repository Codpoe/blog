import React from 'react';

import '../assets/style/base.css';
import '../assets/style/index-page.css';

class IndexPage extends React.Component {
  render() {
    return (
      <div className="page index-page">
        <div className="index-page__content">
          <h1 className="index-page__title">CODPOE</h1>
          <h2 className="index-page__desc">
            Always believe that something wonderful is about to happen
          </h2>
          <ul className="index-page__link-list">
            <li className="index-page__link-item">微博</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default IndexPage;
