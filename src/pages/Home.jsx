import Header from '../components/Header';
import Post from '../features/post/Post';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
// eslint-disable-next-line no-unused-vars
import { fetchPosts, fetchPostsByTerm, fetchComments } from '../features/post/postSlice';
import { fetchSubreddit } from '../features/subreddit/subredditSlice';

const Home = () => {
  const { subreddits, isCategoriesLoading } = useAppSelector((state) => state.subreddit);
  const dispatch = useAppDispatch();

  const [term, setTerm] = useState('');
  const [subreddit, setSubreddit] = useState('r/sewing');

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    setSubreddit(e.target.value);
    console.log(subreddit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsByTerm(term));
  };

  // const handleOnClick = (permalink) => {
  //   dispatch(fetchComments(permalink));
  //   setIsHidden(!isHidden);
  // };
  useEffect(() => {
    dispatch(fetchSubreddit());
  }, []);

  if (isCategoriesLoading) {
    return <div>Data loading</div>; // Add spinner
  }
  return (
    <>
      <Header handleChange={handleChange} handleSubmit={handleSubmit} term={term} />
      <div className="container mx-auto max-w-[1100px]">
        <main className="mt-8 flex flex-col md:flex-row justify-between m-4 ">
          <div className="flex flex-col max-w-[900px] md:mr-20">
            <Post />
          </div>
          <Categories
            categories={subreddits}
            isCategoriesLoading={isCategoriesLoading}
            handleClick={handleClick}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
