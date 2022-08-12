import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { processPosts } from '../../utils';
import { Post } from './model';

export const useGetPostsQuery = () => useQuery(
  ['posts'],
  async () => {
    const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
    const response: AxiosResponse<Post[]> = await axios.get(url);
    const posts = processPosts(response.data);
    return posts;
  },
);
