import { fetchSubreddit } from './subredditSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';

const Categories = (subreddit) => {
  const { handleClick } = subreddit;
  const { subreddits, isCategoriesLoading } = useAppSelector((state) => state.subreddit);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubreddit());
  }, []);

  if (isCategoriesLoading) {
    return <div>Data loading</div>; // Add spinner
  }
  return (
    <aside className="shadow-lg border border-grey-50 rounded-xl min-w-[300px] h-full">
      <h1 className="font-bold p-5">Categories</h1>
      <ul className="my-2">
        {subreddits &&
          subreddits
            .filter((subreddit) => subreddit.display_name !== 'AskReddit')
            .map((subreddit, index) => (
              <li key={index} className="px-5 py-2 hover:bg-slate-500/[.06]">
                <button onClick={handleClick} value={subreddit.display_name_prefixed}>
                  {subreddit.display_name}
                </button>
              </li>
            ))}
      </ul>
    </aside>
  );
};

export default Categories;
