import Header from '../components/Header';
import Post from '../components/Post';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
// eslint-disable-next-line no-unused-vars
import { fetchPosts, fetchPostsByTerm, fetchComments } from '../features/post/postSlice';
import { fetchSubreddit } from '../features/subreddit/subredditSlice';
import { checkURL } from '../helpers/index';

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

  const onToggleComments = (e) => {
    console.log('test', e.target);
    //dispatch(fetchComments(permalink));
  };

  // const handleOnClick = (permalink) => {
  //   dispatch(fetchComments(permalink));
  //   setIsHidden(!isHidden);
  // };
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
      <div className="container mx-auto max-w-[1100px]">
        <main className="mt-8 flex flex-col md:flex-row justify-between m-4 ">
          <div className="flex flex-col max-w-[900px] md:mr-20">
            {posts.length > 0 ? (
              posts
                .filter((post) => checkURL(post.url))
                .map((post) => <Post key={post.id} post={post} toggleComments={onToggleComments} />)
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
      </div>
    </>
  );
};

export default Home;
