import React from 'react';

import '../assets/style/pagination.css';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (ev) => {
    const { onChange } = this.props;
    const index = Number(ev.target.dataset.index);

    if (!index) {
      return;
    }

    onChange && onChange(index);
  }

  handlePrevNextClick(type = 'prev', ev) {
    const { total, value, onChange } = this.props;
    let index;

    if (type === 'prev') {
      if (value === 1) {
        return;
      }
      index = Math.max(value - 1, 1);
    } else {
      if (value === total) {
        return;
      }
      index = Math.min(value + 1, total);
    }

    onChange && onChange(index);
  }

  calcPages(total, current) {
    let pages = [];
    let firstPage;
    let lastPage;
    let centerPages;
    let leftMorePage;
    let rightMorePage;
    let startIndex;
    let endIndex;

    if (total <= 7) {
      pages = new Array(total).fill(0).map((item, index) => {
        return this.renderItem(current, index + 1);
      });
    } else {
      let morePage = (
        <li className="pagination__more">
          <i className="icon icon-more-horizontal"></i>
        </li>
      );

      if (current - 3 <= 1) {
        startIndex = 1;
        endIndex = 5;
      } else {
        startIndex = current - 1;
        firstPage = this.renderItem(current, 1);
        leftMorePage = this.renderMoreItem('left');
      }

      if (current + 3 >= total) {
        startIndex = total - 4;
        endIndex = total;
      } else {
        endIndex = endIndex || current + 1;
        lastPage = this.renderItem(current, total);
        rightMorePage = this.renderMoreItem('right');;
      }

      centerPages = new Array(endIndex - startIndex + 1).fill(0).map((item, index) => {
        return this.renderItem(current, index + startIndex);
      })

      pages = pages.concat(firstPage, leftMorePage, centerPages, rightMorePage, lastPage);
    }

    return pages;
  }

  renderItem(current, index) {
    return (
      <li
        key={index}
        className={`pagination__item ${index === current ? 'pagination__item--active' : ''}`}
        data-index={index}
      >
        {index}
      </li>
    );
  }

  renderMoreItem(side = 'left') {
    return (
      <li key={side} className="pagination__more">
        <i className="icon icon-more-horizontal"></i>
      </li>
    )
  }

  render() {
    const {
      total,
      value,
    } = this.props;

    const items = this.calcPages(total, value);

    return (
      <ul
        className="pagination"
        onClick={this.handleClick}
      >
        <li
          className={`pagination__prev ${value === 1 ? 'pagination__prev--disabled' : ''}`}
          onClick={this.handlePrevNextClick.bind(this, 'prev')}
        >
          <i className="icon icon-chevron-left"></i>
        </li>
        {items}
        <li
          className={`pagination__next ${value === total ? 'pagination__next--disabled' : ''}`}
          onClick={this.handlePrevNextClick.bind(this, 'next')}
        >
          <i className="icon icon-chevron-right"></i>
        </li>
      </ul>
    )
  }
}

Pagination.defaultProps = {
  value: 1
}
