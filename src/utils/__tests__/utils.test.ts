import { cleanup } from '@testing-library/react';
import { isoToLocal, processPosts } from '..';
import { fetchedPosts } from '../mock-data';

describe('utility function', () => {
  afterEach(() => {
    cleanup();
  });

  test('processPosts should return expected results', () => {
    const posts = processPosts(fetchedPosts);
    expect(posts[0]).toHaveProperty('topicName', 'People and culture');
    expect(posts[0]).toHaveProperty('categoryName', 'Articles');
    expect(posts[1]).toHaveProperty('topicName', 'Canonical announcements');
    expect(posts[1]).toHaveProperty('categoryName', 'Articles');
    expect(posts[2]).toHaveProperty('topicName', undefined);
    expect(posts[2]).toHaveProperty('categoryName', 'Articles');
  });

  test('isoToLocal should return expected result', () => {
    expect(isoToLocal('2020-08-25T14:00:03')).toBe('25 August 2020');
    expect(isoToLocal('2020-08-24T15:40:59')).toBe('24 August 2020');
  });
});
