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
            <PostCard />
            <PostCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
