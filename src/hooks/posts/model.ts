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
        id: number; // match in categories // 1453,
        name: string // 'Articles',
        taxonomy: string // 'category',
      }]
    ]
  };

  // these values will be added to the post after preprocessing
  // authorName: string;
  // authorLink: string;
  categoryName?: string; // on footer
  topicName?: string; // on header
}

export const arr = {
  id: 97548,
  date: '2020-08-25T14:00:03',
  date_gmt: '2020-08-25T14:00:03',
  guid: {
    rendered: 'https://admin.insights.ubuntu.com/?p=97548',
  },
  modified: '2020-08-25T15:47:19',
  modified_gmt: '2020-08-25T15:47:19',
  slug: 'travel-clis-and-sticky-notes-lilyanas-life-as-a-canonical-ux-designer',
  status: 'publish',
  type: 'post',
  link: 'https://ubuntu.com/blog/travel-clis-and-sticky-notes-lilyanas-life-as-a-canonical-ux-designer/',
  title: {
    rendered: 'Travel, CLIs, and sticky notes: Lilyana’s life as a Canonical UX designer',
  },
  content: {
    rendered: '\n<p>Canonical is the company behind Ubuntu, but who are the people behind Canonical? This blog series is all about getting to know the different employees that make up our company.</p>\n\n\n\n<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="https://admin.insights.ubuntu.com/wp-content/uploads/06dd/2D28A7B6-346F-4864-B47C-B41B36496078-1.jpg" alt="" class="wp-image-97549" width="384" height="512"/></figure></div>\n\n\n\n<p>Lilyana Videnova is a Senior User Experience (UX) Designer who has worked on a wide range of Canonical products. We spoke with Lilyana to find out what it’s like designing user experiences for one of the largest, most active open source communities in the world.<br></p>\n\n\n\n<p><strong>What’s your background in IT?</strong></p>\n\n\n\n<p>I’m originally from Bulgaria. I always loved maths and playing games when I was growing up. When it came to applying for university, computer science sounded like the perfect mix of those two. I moved to England nine years ago to study computer science at the University of York, and then went on to do my masters in human-computer interaction at UCL. After graduating, I worked at an education technology startup for two years before joining Canonical.<br></p>\n\n\n\n<p><strong>After working in the same startup for two years, what was it about Canonical that made you want to work here?</strong></p>\n\n\n\n<p>Canonical is at the forefront of open source, which is a field I’ve always been interested in, and I feel that it’s a company that is trying to do something good for the world. A while ago, I spoke with a user who looks after a fairly large server lab at a London University. He told me that if MAAS – our Metal-as-a-Service solution – wasn’t open source and completely free to use, they wouldn’t be able to maintain that lab and continue their research. Canonical really is an enabler on a global scale, which I like.<br></p>\n\n\n\n<p><strong>You mentioned MAAS, could you tell us what are you working on at the moment?</strong></p>\n\n\n\n<p>I’m currently creating design guidelines for all of the command-line interfaces (CLIs) used in Canonical products. It&#8217;s an interesting project because it’s not something that a designer would usually be involved in. Typically, CLIs are created and used by engineers, and that often shows in the way they are designed. The new guidelines should help our engineers make command lines that are easier to use and standardised.&nbsp;</p>\n\n\n\n<p>I’m also working on Snapcraft – the Linux app store – to encourage more people to download and use snaps; and I’ve previously been part of the MAAS team.&nbsp;<br></p>\n\n\n\n<p><strong>It looks like you work on many different projects. Does your design approach change depending on the project?</strong></p>\n\n\n\n<p>Absolutely, it all depends on the intended audience. Take MAAS and Juju, for instance. Compared to Snapcraft, they are much more technical tools aimed at a more technical audience, so it’s important to strike the right balance between complexity and intelligibility. Since these tools encompass such a wide array of concepts and functions, it’s common for a user to be skilled in one aspect and a novice in another. We need to give users the opportunity to easily expand their knowledge, but without too much ‘in your face’ advice that might frustrate experts.</p>\n\n\n\n<p>That being said, we do also aim to build similarities across products. Even though Snapcraft and Juju are aimed at different audiences, someone who is familiar with one tool should know what to expect from buttons and layouts in the other. The CLI standardisation project is a good example of how we try to keep the user experience consistent.</p>\n\n\n\n<p><strong>Speaking about your design approach; how do stakeholders factor into design decisions?</strong></p>\n\n\n\n<p>For Snapcraft, we work with three separate engineering teams and a front-end team, as well as end-users. Managing expectations and priorities from all these different groups is always a challenge.</p>\n\n\n\n<p>Feedback from users is especially important – it drives all the improvements we make. We have analytics looking at how people use the website, and we try to speak directly to users through our forums, surveys, and research panels. It helps that many Canonical engineers are also users of Canonical products, so they’re able to provide valuable feedback on a highly technical level.<br></p>\n\n\n\n<p><strong>How has the shift to remote working impacted your work?</strong></p>\n\n\n\n<p>I’m a bit old school. Before the pandemic, I designed primarily using pen and paper, but now everything is digital. We use tablets and a tool called Miro, which is great for quick sketches and collaboration since everyone can draw on the same canvas. For high fidelity designs, we use Sketch. And of course, we all use lots of sticky notes – every self-respecting UX designer has to love sticky notes!</p>\n\n\n\n<p>Within the Snapcraft team, we’ve also started having weekly work together sessions. Five of us get together on a two-hour call and tackle any quick tasks we’d normally handle by pulling up a chair to each other’s desks. There’s no set agenda, and it tends to be very productive.<br></p>\n\n\n\n<p><strong>Finally, what kind of opportunities have you had while you’ve been at Canonical?</strong></p>\n\n\n\n<p>The most exciting thing has been all the travel over the last two years. We have sprints in amazing locations. I’ve been to Montreal, Vancouver, Paris, and Cape Town. At those events, I’ve had the chance to go up on stage to present my work, which has definitely helped me to improve my confidence and leadership skills. I’m no longer intimidated presenting my ideas in front of a room of very technical engineers, so we’re able to have productive and interesting discussions.&nbsp;</p>\n\n\n\n<p>In terms of career progression, I was promoted quite quickly to Senior Designer. It’s been really great to be given a lot of responsibility whenever I ask for it, and I’ve been well supported by both peers and higher-ups. It’s a cool environment where I feel like I can be brave in what I want to try.&nbsp;<br></p>\n\n\n\n<p>Canonical is always looking for bright new talent, and we hire from everywhere! Apply <a href="https://canonical.com/careers">here</a> to join the team or go check out our Twitter account <a href="https://twitter.com/ubuntuwantsyou?lang=en">@UbuntuWantsYou</a>.<br></p>\n',
    protected: false,
  },
  excerpt: {
    rendered: '<p>Canonical is the company behind Ubuntu, but who are the people behind Canonical? This blog series is all about getting to know the different employees that make up our company. Lilyana Videnova is a Senior User Experience (UX) Designer who has worked on a wide range of Canonical products. We spoke with Lilyana to find [&hellip;]</p>\n',
    protected: false,
  },
  author: 631,
  featured_media: 'https://ubuntu.com/wp-content/uploads/5288/Title-Cards.jpg',
  comment_status: 'open',
  ping_status: 'closed',
  sticky: false,
  template: '',
  format: 'standard',
  // meta: [],
  categories: [
    1453,
  ],
  tags: [
    2038,
    2226,
  ],
  topic: [
    2052,
  ],
  group: [
    2051,
  ],
  _event_location: '',
  _event_venue: '',
  _event_registration: '',
  _start_day: '24',
  _start_month: '08',
  _start_year: '2020',
  _end_day: '24',
  _end_month: '08',
  _end_year: '2020',
  _links: {
    self: [
      {
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts/97548',
      },
    ],
    collection: [
      {
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts',
      },
    ],
    about: [
      {
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/types/post',
      },
    ],
    author: [
      {
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/users/631',
      },
    ],
    replies: [
      {
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/comments?post=97548',
      },
    ],
    'version-history': [
      {
        count: 3,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts/97548/revisions',
      },
    ],
    'predecessor-version': [
      {
        id: 97553,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts/97548/revisions/97553',
      },
    ],
    'wp:featuredmedia': [
      {
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media/97127',
      },
    ],
    'wp:attachment': [
      {
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media?parent=97548',
      },
    ],
    'wp:term': [
      {
        taxonomy: 'category',
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/categories?post=97548',
      },
      {
        taxonomy: 'post_tag',
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/tags?post=97548',
      },
      {
        taxonomy: 'topic',
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/topic?post=97548',
      },
      {
        taxonomy: 'group',
        embeddable: true,
        href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/group?post=97548',
      },
    ],
    curies: [
      {
        name: 'wp',
        href: 'https://api.w.org/{rel}',
        templated: true,
      },
    ],
  },
  _embedded: {
    author: [
      {
        id: 631,
        name: 'cmoullec',
        url: 'https://login.ubuntu.com/+id/sybNkXt',
        description: '',
        link: 'https://ubuntu.com/blog/author/cmoullec/',
        slug: 'cmoullec',
        avatar_urls: {
          24: 'https://secure.gravatar.com/avatar/c0c5f067673a427c6a963d040c70ebb5?s=24&d=mm&r=g',
          48: 'https://secure.gravatar.com/avatar/c0c5f067673a427c6a963d040c70ebb5?s=48&d=mm&r=g',
          96: 'https://secure.gravatar.com/avatar/c0c5f067673a427c6a963d040c70ebb5?s=96&d=mm&r=g',
        },
        user_job_title: '',
        user_website_title: '',
        user_google: '',
        user_twitter: '',
        user_facebook: '',
        user_photo: '',
        user_location: '',
        _links: {
          self: [
            {
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/users/631',
            },
          ],
          collection: [
            {
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/users',
            },
          ],
        },
      },
    ],
    'wp:featuredmedia': [
      {
        id: 97127,
        date: '2020-07-16T07:46:35',
        slug: 'title-cards',
        type: 'attachment',
        link: 'https://ubuntu.com/blog/employee-spotlight-alice-cambridge-inside-sales-representative/title-cards/',
        title: {
          rendered: 'Employee Spotlight',
        },
        author: 631,
        caption: {
          rendered: '',
        },
        alt_text: '',
        media_type: 'image',
        mime_type: 'image/jpeg',
        media_details: {
          width: 960,
          height: 540,
          file: 'Title-Cards.jpg',
          image_meta: {
            aperture: '0',
            credit: '',
            camera: '',
            caption: '',
            created_timestamp: '0',
            copyright: '',
            focal_length: '0',
            iso: '0',
            shutter_speed: '0',
            title: '',
            orientation: '0',
            // keywords: [],
          },
          sizes: {},
        },
        source_url: 'https://admin.insights.ubuntu.com/wp-content/uploads/5288/Title-Cards.jpg',
        _links: {
          self: [
            {
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media/97127',
            },
          ],
          collection: [
            {
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media',
            },
          ],
          about: [
            {
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/types/attachment',
            },
          ],
          author: [
            {
              embeddable: true,
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/users/631',
            },
          ],
          replies: [
            {
              embeddable: true,
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/comments?post=97127',
            },
          ],
          'wp:term': [
            {
              taxonomy: 'topic',
              embeddable: true,
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/topic?post=97127',
            },
            {
              taxonomy: 'group',
              embeddable: true,
              href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/group?post=97127',
            },
          ],
          curies: [
            {
              name: 'wp',
              href: 'https://api.w.org/{rel}',
              templated: true,
            },
          ],
        },
      },
    ],
    'wp:term': [
      [
        {
          id: 1453,
          link: 'https://ubuntu.com/blog/category/articles/',
          name: 'Articles',
          slug: 'articles',
          taxonomy: 'category',
          _links: {
            self: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/categories/1453',
              },
            ],
            collection: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/categories',
              },
            ],
            about: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/taxonomies/category',
              },
            ],
            'wp:post_type': [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?categories=1453',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/event?categories=1453',
              },
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true,
              },
            ],
          },
        },
      ],
      [
        {
          id: 2038,
          link: 'https://ubuntu.com/blog/tag/careers/',
          name: 'careers',
          slug: 'careers',
          taxonomy: 'post_tag',
          _links: {
            self: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/tags/2038',
              },
            ],
            collection: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/tags',
              },
            ],
            about: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/taxonomies/post_tag',
              },
            ],
            'wp:post_type': [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?tags=2038',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/event?tags=2038',
              },
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true,
              },
            ],
          },
        },
        {
          id: 2226,
          link: 'https://ubuntu.com/blog/tag/spotlight/',
          name: 'spotlight',
          slug: 'spotlight',
          taxonomy: 'post_tag',
          _links: {
            self: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/tags/2226',
              },
            ],
            collection: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/tags',
              },
            ],
            about: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/taxonomies/post_tag',
              },
            ],
            'wp:post_type': [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?tags=2226',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/event?tags=2226',
              },
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true,
              },
            ],
          },
        },
      ],
      [
        {
          id: 2052,
          link: 'https://ubuntu.com/blog/topic/people-and-culture/',
          name: 'People and culture',
          slug: 'people-and-culture',
          taxonomy: 'topic',
          _links: {
            self: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/topic/2052',
              },
            ],
            collection: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/topic',
              },
            ],
            about: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/taxonomies/topic',
              },
            ],
            'wp:post_type': [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?topic=2052',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media?topic=2052',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/event?topic=2052',
              },
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true,
              },
            ],
          },
        },
      ],
      [
        {
          id: 2051,
          link: 'https://ubuntu.com/blog/group/people-and-culture/',
          name: 'People and culture',
          slug: 'people-and-culture',
          taxonomy: 'group',
          _links: {
            self: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/group/2051',
              },
            ],
            collection: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/group',
              },
            ],
            about: [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/taxonomies/group',
              },
            ],
            'wp:post_type': [
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?group=2051',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/media?group=2051',
              },
              {
                href: 'https://admin.insights.ubuntu.com/wp-json/wp/v2/event?group=2051',
              },
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true,
              },
            ],
          },
        },
      ],
    ],
  },
};
