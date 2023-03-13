import { convertTime } from '../../helpers';
/* eslint-disable react/prop-types */
// add nested comments ?
const Comment = (props) => {
  const { comments } = props;
  return (
    <>
      {comments?.length > 0 &&
        comments.map((comment, index) => (
          <div key={index} className="bg-[#f2f2f2] shadow-lg p-3 m-5 rounded-lg">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-[#212427] text-sm"> {comment.author}</h1>
                <p className="text-slate-500 text-xs"> {convertTime(comment.created_utc)}</p>
              </div>
              <p className=" text-[#212427]"> {comment.body}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Comment;
