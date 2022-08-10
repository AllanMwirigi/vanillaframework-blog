/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

function BlogCard() {
  return (
    <div className="col-4">
      <div className="p-card blog-post-header">
        <header>
          <h4>CLOUD AND SERVER</h4>
        </header>
        <hr className="header-break" />
        <img
          className="p-card__image"
          src="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
          alt="Blog Post"
        />
        <div className="p-card__inner">
          <h3>
            <a href="#">The power of installed based snap metrics</a>
          </h3>
          <p>
            <em>
              by
              {' '}
              <a href="#">Bartek Szopka</a>
              {' '}
              on 21st August 2021
            </em>
          </p>
        </div>
        <hr className="u-no-margin--bottom" />
        <div className="p-card__inner">
          Article
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
