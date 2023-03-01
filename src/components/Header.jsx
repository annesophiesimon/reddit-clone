import reddit from '../assets/images/reddit-logo.png';
import SearchBar from '../features/post/SearchBar';
const Header = () => {
  return (
    <header className="shadow-lg mb-4">
      <div className="container mx-auto max-w-[1100px]">
        <div className="flex py-3 mx-4">
          <div className="w-10">
            <img alt="reddit logo" src={reddit} />
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
