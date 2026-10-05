import "./PostDetails.css";

function PostDetails({ post, onBack }) {
  return (
    <article className="post-details">
      <button type="button" className="post-details__back" onClick={onBack}>
        ← Back to posts
      </button>

      <div className="post-details__image">
        <span>Post image</span>
      </div>

      <div className="post-details__content">
        <p className="post-details__meta">
          r/{post.subreddit} · u/{post.author}
        </p>

        <h1 className="post-details__title">{post.title}</h1>

        <p className="post-details__text">{post.selftext}</p>

        <div className="post-details__stats">
          <span>▲ {post.score} votes</span>
          <span>💬 {post.num_comments} comments</span>
        </div>
      </div>
    </article>
  );
}

export default PostDetails;
