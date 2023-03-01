import Header from '../components/Header';
import Post from '../features/post/Post';
import Categories from '../features/subreddit/Categories';
import { useState } from 'react';
const Home = () => {
  const [subreddit, setSubreddit] = useState('r/sewing');
  const handleClick = (e) => {
    setSubreddit(e.target.value);
  };

  return (
    <>
      <Header />
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
