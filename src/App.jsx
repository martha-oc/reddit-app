import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchRedditPosts } from "./redux/postsSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRedditPosts("popular"));
    }
  }, [dispatch, status]);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Sidebar />

        <section className="content">
          <h2>Popular Posts</h2>

          {status === "loading" && <p>Loading Reddit posts...</p>}

          {status === "failed" && (
            <p role="alert">Something went wrong: {error}</p>
          )}

          {status === "succeeded" && (
            <div className="post-list">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  subreddit={post.subreddit}
                  author={post.author}
                  votes={post.score}
                  comments={post.num_comments}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
