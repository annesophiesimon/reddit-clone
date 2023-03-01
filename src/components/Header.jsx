import reddit from '../assets/images/reddit-logo.png';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = (data) => {
  const { handleSubmit, handleChange, term } = data;

  return (
    <header className="shadow-lg mb-4">
      <div className="container mx-auto max-w-[1100px]">
        <div className="flex py-3 mx-4">
          <div className="w-10">
            <img alt="reddit logo" src={reddit} />
          </div>
          <form
            className="flex justify-between border border-gray-300 p-1 rounded-lg mx-auto md:w-80"
            onSubmit={handleSubmit}>
            <input
              type="text"
              id="header-search"
              placeholder="Search Reddit"
              name="search"
              aria-label="Search posts"
              value={term}
              onChange={handleChange}
            />
            <button type="submit" aria-label="Search">
              <HiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
