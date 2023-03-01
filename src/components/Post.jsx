/* eslint-disable react/prop-types */
import Vote from './Vote';
import { convertTime } from '../helpers';
const Post = (props) => {
  const { post, toggleComments } = props;

  // const renderComments = (id, index) => {
  //   console.log(posts.postsData[index].id);
  //   console.log(posts.comments.length);

  //   if (index === id) return;
  //   <Comment />;

  //   // if (posts.postData[index].id === id && posts.comments.length > 0) {
  //   //   return (
  //   //     <div>
  //   //       {posts.comments.map((comment) => (
  //   //         <Comment
  //   //           key={comment.id}
  //   //           name={comment.author}
  //   //           time={convertTime(comment.created_utc)}
  //   //           content={comment.body}
  //   //         />
  //   //       ))}
  //   //     </div>
  //   //   );
  //   // }

  //   return null;
  // };

  return (
    <>
      <div className=" container mx-auto  bg-white">
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
                    <img className="justify-items-center" alt={post.title} src={post.url}></img>
                  </div>
                  <hr className="mx-20 mb-10" />
                </article>
              </section>
            </div>
            <div className="flex justify-between text-sm text-slate-500 px-5">
              <Vote ups={post.ups} />
              <button onClick={toggleComments}>
                <p value={post.id}>
                  {post.num_comments} {post.num_comments > 1 ? `comments` : `comment`}
                </p>
              </button>
            </div>
            {/* {renderComments(post.id, index)} */}
            {/* {posts.comments.length ? (
              posts.comments
                .slice(0, 2)
                .map((comment) => (
                  <Comment
                    key={comment.id}
                    name={comment.author}
                    time={convertTime(comment.created_utc)}
                    content={comment.body}
                    isHidden={isHidden}
                  />
                ))
            ) : (
              <Comment isHidden={isHidden} />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
