const Categories = (subreddit) => {
  const { handleClick, categories } = subreddit;

  return (
    <aside className="shadow-lg rounded-xl md:w-1/6">
      <h1 className="font-bold p-2">Categories</h1>
      <ul className="my-2">
        {categories &&
          categories.map((subreddit) => (
            <li key={subreddit.id} className="p-2 hover:bg-slate-400">
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
