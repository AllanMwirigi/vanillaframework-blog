import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BlogCard from '..';
import { processedPosts } from '../../../utils/mock-data';

describe('BlogCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render post category', () => {
    render(<BlogCard post={processedPosts[0]} />);
    const heading = screen.getByText('People and culture', { exact: false });
    expect(heading).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<BlogCard post={processedPosts[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
