import Header from '../components/Header';
import Post from '../components/Post';
import Categories from '../components/Categories';
import Comment from '../components/Comment';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPosts, fetchPostsByTerm } from '../features/post/postSlice';
import { fetchSubreddit } from '../features/subreddit/subredditSlice';
import { convertTime, checkURL } from '../helpers/index';

const Home = () => {
  const { posts, isLoading, isError, message } = useAppSelector((state) => state.post);
  const { subreddits, isCategoriesLoading } = useAppSelector((state) => state.subreddit);

  const dispatch = useAppDispatch();

  const [term, setTerm] = useState('');
  const [subreddit, setSubreddit] = useState('r/sewing');

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    setSubreddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsByTerm(term));
  };

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }
    dispatch(fetchPosts(subreddit));
    dispatch(fetchSubreddit());
  }, [isError, message, subreddit]);

  if (isLoading && isCategoriesLoading) {
    return <div>Data loading</div>; // Add spinner
  }
  return (
    <>
      <Header handleChange={handleChange} handleSubmit={handleSubmit} term={term} />
      <div className="container mx-auto">
        <main className="mt-8 flex flex-col md:flex-row">
          <div className="flex flex-col w-full">
            {posts.length > 0 ? (
              posts
                .filter((post) => checkURL(post.url))
                .map((post) => (
                  <Post
                    key={post.id}
                    ups={post.ups}
                    title={post.title}
                    thumbnail={post.url}
                    author={post.author}
                    dateCreated={convertTime(post.created_utc)}
                    nbComs={post.num_comments}
                  />
                ))
            ) : (
              <p> There is no post yet </p>
            )}
          </div>
          <Categories
            categories={subreddits}
            isCategoriesLoading={isCategoriesLoading}
            handleClick={handleClick}
          />
        </main>
        <Comment />
      </div>
    </>
  );
};

export default Home;
