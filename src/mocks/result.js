export const resultMockSubreddit = {
  data: {
    children: [
      { data: { id: 1, display_name_prefixed: 'r/home', display_name: 'Home' } },
      { data: { id: 2, display_name_prefixed: 'r/sewing', display_name: 'Sewing' } },
      { data: { id: 3, display_name_prefixed: 'r/basket', display_name: 'Basket' } },
      { data: { id: 4, display_name_prefixed: 'r/crossfit', display_name: 'Crossfit' } },
      { data: { id: 5, display_name_prefixed: 'r/tech', display_name: 'Tech' } }
    ]
  }
};

export const resultMockSewing = {
  data: {
    children: [
      {
        data: {
          id: 1,
          ups: 26,
          title: 'Mon nouveau manteau cousu main',
          url: 'image.jpg',
          author: 'Kevin',
          created_utc: 36367,
          num_comments: 256
        }
      },
      {
        data: {
          id: 2,
          ups: 33,
          title: 'Comment monter fermeture éclaire',
          url: 'image.jpg',
          author: 'Bernard',
          created_utc: 23578899,
          num_comments: 346
        }
      }
    ]
  }
};

export const resultMockCrossfit = {
  data: {
    children: [
      {
        data: {
          id: 1,
          ups: 26,
          title: 'How to improve my muscle up',
          url: 'image.jpg',
          author: 'Katarina',
          created_utc: 36367,
          num_comments: 78
        }
      }
    ]
  }
};

export const resultMockBachata = {
  data: {
    children: [
      {
        data: {
          id: 1,
          ups: 33,
          title: 'Bachata',
          url: 'image.jpg',
          author: 'Lola',
          created_utc: 3636,
          num_comments: 22
        }
      }
    ]
  }
};

export const resultMockEmptyPost = {
  data: {
    children: []
  }
};

export const resultsMock = [
  resultMockSubreddit,
  resultMockSewing,
  resultMockBachata,
  resultMockEmptyPost
];
