import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Sidebar />

        <section className="content">
          <h2>Popular Posts</h2>

          <div className="post-list">
            <PostCard
              title="Scientists discover an exciting new technology"
              subreddit="technology"
              author="reddituser"
              votes={1234}
              comments={245}
            />

            <PostCard
              title="What is everyone playing this weekend?"
              subreddit="gaming"
              author="gamerguy"
              votes={856}
              comments={132}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
