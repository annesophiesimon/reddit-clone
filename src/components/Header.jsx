import reddit from '../assets/images/reddit-logo.png';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = (data) => {
  const { handleSubmit, handleChange, term } = data;

  return (
    <header className="flex bg-white items-center p-2.5 shadow-lg mb-4">
      <div className="w-10">
        <img alt="reddit logo" src={reddit} />
      </div>
      <form
        className="flex justify-between border border-gray-300 p-1 rounded-lg mx-auto w-80"
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
    </header>
  );
};

export default Header;
