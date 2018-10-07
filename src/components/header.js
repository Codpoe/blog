import React from 'react'
import { Link } from 'gatsby'

import '../assets/style/header.css';

class Header extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="header">
        <div className="header__content">
          <div className="header__content-main">
            <Link to="/">
              <h1 className="header__title">
                <span className="header__title-text">{title}</span>
              </h1>
            </Link>
            <ul className="header__menu">
              <Link className="header__menu-item" to="/blog">首页</Link>/
              <Link className="header__menu-item" to="/category">分类</Link>/
              <Link className="header__menu-item" to="/archive">归档</Link>/
              <Link className="header__menu-item" to="/about">关于</Link>
            </ul>
          </div>
          <p className="header__content-desc">
            Always believe that something wonderful is about to happen.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
