const Comment = (comment) => {
  const { name, time, content } = comment;
  return (
    <div className="bg-white shadow-lg p-5 m-2 rounded-xl md:w-5/6">
      <div>
        <p>{name}</p>
        <p> {time} hours ago</p>
      </div>
      <p> {content}</p>
    </div>
  );
};

export default Comment;
