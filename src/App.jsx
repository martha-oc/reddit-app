import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import PostDetails from "./components/PostDetails/PostDetails";
import { fetchRedditPosts } from "./redux/postsSlice";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const dispatch = useDispatch();

  const { posts, status } = useSelector((state) => state.posts);

  const filteredPosts = posts.filter((post) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      post.title.toLowerCase().includes(search) ||
      post.subreddit.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search) ||
      post.selftext.toLowerCase().includes(search)
    );
  });

  useEffect(() => {
    dispatch(fetchRedditPosts(selectedCategory.toLowerCase()));
  }, [dispatch, selectedCategory]);

  return (
    <div className="app">
      <Header />

      <main className="main">
        {selectedPost ? (
          <PostDetails
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <>
            <Search onSearch={handleSearch} />

            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            <section className="content">
              <div className="content__heading">
                <div>
                  <h2>{selectedCategory} Posts</h2>

                  {status === "succeeded" && (
                    <span className="content__count">
                      {filteredPosts.length}{" "}
                      {filteredPosts.length === 1 ? "post" : "posts"}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="content__refresh"
                  onClick={() =>
                    dispatch(fetchRedditPosts(selectedCategory.toLowerCase()))
                  }
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Refreshing..." : "↻ Refresh"}
                </button>
              </div>

              {status === "loading" && (
                <div className="post-list" aria-live="polite" aria-busy="true">
                  {[1, 2, 3].map((item) => (
                    <article className="post-skeleton" key={item}>
                      <div className="post-skeleton__image" />

                      <div className="post-skeleton__content">
                        <div className="post-skeleton__line post-skeleton__line--title" />
                        <div className="post-skeleton__line" />
                        <div className="post-skeleton__line post-skeleton__line--short" />
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {status === "failed" && (
                <div className="content__error" role="alert">
                  <div className="content__error-icon" aria-hidden="true">
                    ⚠️
                  </div>

                  <h3>Something went wrong</h3>

                  <p>
                    We couldn't load the {selectedCategory.toLowerCase()} posts.
                  </p>

                  <button
                    type="button"
                    className="content__error-button"
                    onClick={() =>
                      dispatch(fetchRedditPosts(selectedCategory.toLowerCase()))
                    }
                  >
                    Try Again
                  </button>
                </div>
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
                        selftext={post.selftext}
                        onClick={() => handlePostClick(post)}
                      />
                    ))
                  ) : (
                    <div className="content__empty">
                      <div className="content__empty-icon" aria-hidden="true">
                        🔎
                      </div>

                      <h3>No posts found</h3>

                      <p>
                        No posts match{" "}
                        {searchTerm
                          ? `"${searchTerm}"`
                          : `the ${selectedCategory.toLowerCase()} category`}
                        .
                      </p>

                      {searchTerm && (
                        <button
                          type="button"
                          className="content__empty-button"
                          onClick={() => setSearchTerm("")}
                        >
                          Clear search
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
