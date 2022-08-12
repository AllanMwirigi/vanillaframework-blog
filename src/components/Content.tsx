import React from 'react';
import { useGetPostsQuery } from '../hooks/posts/posts';
import BlogCard from './BlogCard';

function Content() {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return (
      <i className="p-icon--spinner u-animation--spin" />
    );
  }
  if (isError) {
    return (
      <div className="p-notification--negative">
        <div className="p-notification__content">
          <h5 className="p-notification__title">Error</h5>
          <p className="p-notification__message">Could not fetch blog posts</p>
        </div>
      </div>
    );
  }

  let blogCards: JSX.Element[] = [];
  if (data) {
    console.log('data', data);
    blogCards = data.map((post) => <BlogCard post={post} key={post.id} />);
  }

  return (
    <div className="p-strip--light">
      <div className="row u-equal-height">
        {blogCards}
      </div>
    </div>
  );
}
export default Content;
