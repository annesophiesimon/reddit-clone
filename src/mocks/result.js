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
          title: 'My completed coat',
          url: 'image.jpg',
          author: 'Kevin',
          created_utc: 36367,
          num_comments: 256,
          permalink: 'r/sewing/comments/1/my_completed_coat'
        }
      },
      {
        data: {
          id: 2,
          ups: 33,
          title: 'how to sew a zipper',
          url: 'image.jpg',
          author: 'Bernard',
          created_utc: 23578899,
          num_comments: 346,
          permalink: 'r/sewing/comments/2/how_to_sew_a_zipper'
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
          num_comments: 78,
          permalink: 'r/crossfit/comments/1/how_to_improve_my_muscle_up'
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
          num_comments: 22,
          permalink: 'r/bachata/comments/1/class_in_vegas'
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

export const resultMockComments = {
  data: {
    children: [
      {
        data: {
          id: 1,
          author: 'Joel',
          created_utc: 36368,
          body: 'I like this pattern'
        }
      }
    ]
  }
};

export const resultsMock = [
  resultMockSubreddit,
  resultMockSewing,
  resultMockBachata,
  resultMockEmptyPost,
  resultMockComments
];
