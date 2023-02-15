// import Categories from './components/Categories';
// import Header from './components/Header';
// import Post from './components/Post';
// import Comment from './components/Comment';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-slate-50 h-screen">
      <Home />
      {/* <Header />
      <div className="container mx-auto">
        <main className="mt-8 flex flex-col md:flex-row">
          <Post
            title="This is my title"
            content="blblablablabla"
            name="Geraldine"
            time="6"
            imgUrl="https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png"
          />
          <Categories />
        </main>
        <Comment />
      </div> */}
    </div>
  );
}

export default App;
