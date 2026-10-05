import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import { fetchRedditPosts } from "./redux/postsSlice";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const dispatch = useDispatch();

  const { posts, status, error } = useSelector((state) => state.posts);

  const filteredPosts = posts.filter((post) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      post.title.toLowerCase().includes(search) ||
      post.subreddit.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search)
    );
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRedditPosts("popular"));
    }
  }, [dispatch, status]);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Search onSearch={handleSearch} />

        <Sidebar />

        <section className="content">
          <h2>Popular Posts</h2>

          {status === "loading" && <p>Loading Reddit posts...</p>}

          {status === "failed" && (
            <p role="alert">Something went wrong: {error}</p>
          )}

          {status === "succeeded" && (
            <div className="post-list">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    subreddit={post.subreddit}
                    author={post.author}
                    votes={post.score}
                    comments={post.num_comments}
                  />
                ))
              ) : (
                <p>No posts found matching "{searchTerm}".</p>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
