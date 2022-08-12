/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Post } from '../../hooks/posts/model';
import { isoToLocal } from '../../utils';
import './styles.scss';

type PropTypes = { post: Post }

function BlogCard({ post }: PropTypes) {
  return (
    <div className="col-4 blog-post-col">
      <div className="p-card--highlighted blog-post">
        <header>
          <h4 className="p-muted-heading">{post.topicName || 'Miscellaneous'}</h4>
        </header>
        <hr className="header-break" />
        <div className="p-card__content">
          <img
            className="p-card__image"
            src={post.featured_media}
            alt="Blog Post"
          />
          <div>
            <h4>
              <a href={post.link} target="_blank" rel="noreferrer">{post.title.rendered}</a>
            </h4>
            <p>
              <em>
                By
                {' '}
                <a href={post._embedded.author[0].link} target="_blank" rel="noreferrer">
                  {post._embedded.author[0].name}
                </a>
                {' '}
                on
                {' '}
                {isoToLocal(post.date_gmt)}
              </em>
            </p>
          </div>
        </div>
        <div className="blog-card-footer">
          <span className="p-text--small">{post.categoryName || 'Miscellaneous'}</span>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
