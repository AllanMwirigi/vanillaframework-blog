import { DateTime } from 'luxon';
import { Post } from '../hooks/posts/model';

export const processPosts = (fetchedPosts: Post[]): Post[] => {
  const posts = fetchedPosts.map((post) => {
    const categoryId = post.categories.length > 0 ? post.categories[0] : null;
    const topicId = post.topic.length > 0 ? post.topic[0] : null;
    let categoryName;
    let topicName;
    // eslint-disable-next-line no-underscore-dangle
    post._embedded['wp:term'].forEach((value) => {
      const item = value.length > 0 ? value[0] : null;
      if (item != null) {
        if (item.id === categoryId) {
          categoryName = item.name;
        }
        if (item.id === topicId) {
          topicName = item.name;
        }
      }
    });
    return { ...post, categoryName, topicName };
  });
  return posts;
};

export const isoToLocal = (time: string) => (
  DateTime.fromISO(time).toLocal().toFormat('dd MMMM yyyy')
);
