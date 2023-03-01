/* eslint-disable react/prop-types */
import { HiOutlineSearch } from 'react-icons/hi';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchPostsByTerm } from './postSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsByTerm(term));
  };

  return (
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
  );
};

export default SearchBar;
