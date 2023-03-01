export const API_ROOT = 'https://www.reddit.com';

export const getHomePost = async (subreddit) => {
  const response = await fetch(`${API_ROOT}/${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};

export const getPostByTerms = async (terms) => {
  const response = await fetch(`${API_ROOT}/search.json?q=${terms}`);
  const json = await response.json();
  return json.data.children.slice(0, 5).map((post) => post.data);
};

export const getSubreddit = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.slice(0, 5).map((subbreddit) => subbreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};
