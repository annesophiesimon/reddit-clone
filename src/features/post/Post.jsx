/* eslint-disable react/prop-types */
import Vote from '../../components/Vote';
import { convertTime, checkURL } from '../../helpers';
import { fetchPosts } from './postSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';

const Post = (props) => {
  const { subreddit } = props;
  const { posts, isLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [subreddit]);
  if (isLoading) {
    return <div>Data loading</div>; // Add spinner
  }
  return (
    <>
      {posts.length > 0 ? (
        posts
          .filter((post) => checkURL(post.url))
          .map((post, index) => (
            <div key={index} className="container mx-auto  bg-white">
              <div className="flex py-5 shadow-lg border border-grey-50 rounded-xl max-w-[700px] mb-10">
                <div className="flex flex-col">
                  <div className="flex items-start">
                    <section>
                      <article>
                        <div className="px-5 mb-5">
                          <h1 className="font-bold text-[#212427] text-sm">{post.author}</h1>
                          <p className="text-slate-500 text-xs">{convertTime(post.created_utc)}</p>
                          <h1 className="my-4  text-[#212427]"> {post.title}</h1>
                        </div>
                        <div className="flex items-center justify-center mb-8">
                          <img
                            className="justify-items-center"
                            alt={post.title}
                            src={post.url}></img>
                        </div>
                        <hr className="mx-20 mb-10" />
                      </article>
                    </section>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500 px-5">
                    <Vote ups={post.ups} />
                    <button>
                      <p>
                        {post.num_comments} {post.num_comments > 1 ? `comments` : `comment`}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p> There is no post yet </p>
      )}
    </>
  );
};

export default Post;
