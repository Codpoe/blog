import React from 'react';
import { Link } from 'gatsby';

import getRealExcerpt from '../utils/getRealExcerpt';
import '../assets/style/short-post.css';

class ShortPost extends React.Component {
  handleImgLoad(ev) {
    ev.target.classList.add('short-post__img--loaded');
  }

  render() {
    const { frontmatter, excerpt } = this.props;
    const { title, date, category, img } = frontmatter;
    let imgList = [];

    if (img) {
      imgList = Array.isArray(img) ? img : [img];
    }

    return (
      <article className="short-post">
        <div className="short-post__content">
          <h1 className="short-post__title">{title}</h1>
          <ul className="short-post__info">
            <span className="short-post__info-item">{date}</span>
            <Link className="short-post__info-item" to={`/category/${category}`}>{category}</Link>
          </ul>
          <p className="short-post__excerpt">{getRealExcerpt(excerpt)}</p>
          <div className={`short-post__img-list short-post__img-list--${Math.min(imgList.length, 4)}`}>
            {imgList.map((img, index) => (
              <div
                className="short-post__img-wrapper"
                key={index}
              >
                <img
                  className="short-post__img"
                  src={img}
                  alt="Ops... load fail"
                  onLoad={this.handleImgLoad}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default ShortPost;
