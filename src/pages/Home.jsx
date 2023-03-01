import Header from '../components/Header';
import Post from '../features/post/Post';
import Categories from '../features/subreddit/Categories';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchPostsByTerm } from '../features/post/postSlice';
import { fetchSubreddit } from '../features/subreddit/subredditSlice';

const Home = () => {
  //const { subreddits, isCategoriesLoading } = useAppSelector((state) => state.subreddit);
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
    dispatch(fetchSubreddit());
  }, []);

  return (
    <>
      <Header handleChange={handleChange} handleSubmit={handleSubmit} term={term} />
      <div className="container mx-auto max-w-[1100px]">
        <main className="mt-8 flex flex-col md:flex-row justify-between m-4 ">
          <div className="flex flex-col max-w-[900px] md:mr-20">
            <Post subreddit={subreddit} />
          </div>
          <Categories handleClick={handleClick} />
        </main>
      </div>
    </>
  );
};

export default Home;
