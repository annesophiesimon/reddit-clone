import Vote from './Vote';

const Post = (post) => {
  const { ups, title, thumbnail, author, dateCreated, nbComs } = post;
  return (
    <>
      <div className="bg-white flex py-5 shadow-lg rounded-xl m-4 md:w-5/6">
        <div className="flex w-full flex-col">
          <div className="flex items-start mx-2">
            <Vote ups={ups} />
            <section className="text-center">
              <article className="w-full">
                <h1 className="mb-2"> {title}</h1>
                <div className="flex items-center justify-center mb-8">
                  <img className="w-6/12" alt={title} src={thumbnail}></img>
                </div>
                <hr />
                <p className="mt-8">
                  {author} - {dateCreated} - {nbComs}
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
