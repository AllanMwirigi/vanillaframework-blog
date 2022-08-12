/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Post } from '../../hooks/posts/model';
import './styles.scss';

type PropTypes = { post: Post }

function BlogCard({ post }: PropTypes) {
  return (
    <div className="col-4">
      <div className="p-card blog-post-header">
        <header>
          <h4>{post.topicName || 'Miscellaneous'}</h4>
        </header>
        <hr className="header-break" />
        <img
          className="p-card__image"
          src={post.featured_media}
          alt="Blog Post"
        />
        <div className="p-card__inner">
          <h3>
            <a href={post.link}>{post.title.rendered}</a>
          </h3>
          <p>
            <em>
              by
              {' '}
              <a href={post._embedded.author[0].link}>{post._embedded.author[0].name}</a>
              {' '}
              on
              {' '}
              {post.date_gmt}
            </em>
          </p>
        </div>
        <hr className="u-no-margin--bottom" />
        <div className="p-card__inner">
          {post.categoryName || 'Miscellaneous'}
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
