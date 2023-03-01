import { BiLike, BiDislike } from 'react-icons/bi';

const Vote = (votes) => {
  const { ups } = votes;
  return (
    <div className="flex text-slate-500">
      <button className="flex items-center mx-2 hover:text-green-700" aria-label="Vote up">
        <BiLike className="mr-2" /> {ups} |
      </button>
      <button aria-label="vote down" className="down hover:text-red-700">
        <BiDislike />
      </button>
    </div>
  );
};

export default Vote;
