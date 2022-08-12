export interface Post {
  id: number;
  title: { rendered: string };
  date_gmt: string;
  link: string;
  featured_media: string;
  author: number;
  categories: number[];
  topic: number[];
  _embedded: {
    author: [{
      id: number,
      name: string,
      link: string,
    }];
    'wp:term': [
      [{
        id: number; // match in categories arr,
        name: string // e.g. 'Articles',
        taxonomy: string // e.g. 'category',
      }]
    ]
  };

  // these values will be added to the post after preprocessing
  categoryName?: string; // on footer
  topicName?: string; // on header
}
