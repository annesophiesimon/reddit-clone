const Comment = (comment) => {
  const { name, time, content, isHidden } = comment;
  return (
    <div className={`bg-[#f2f2f2] shadow-lg p-3 m-5 rounded-lg ${isHidden ? 'hidden' : ''}`}>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-[#212427] text-sm"> {name} </h1>
          <p className="text-slate-500 text-xs"> {time}</p>
        </div>
        <p className=" text-[#212427]">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
