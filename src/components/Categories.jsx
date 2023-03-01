const Categories = (subreddit) => {
  const { handleClick, categories } = subreddit;

  return (
    <aside className="shadow-lg border border-grey-50 rounded-xl min-w-[300px] h-full">
      <h1 className="font-bold p-5">Categories</h1>
      <ul className="my-2">
        {categories &&
          categories.map((subreddit) => (
            <li key={subreddit.id} className="px-5 py-2 hover:bg-slate-500/[.06]">
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
