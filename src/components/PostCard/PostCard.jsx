import "./PostCard.css";

function PostCard({ title, subreddit, author, votes, comments }) {
  return (
    <article className="post-card">
      <div className="post-card__image">
        <span>Post image</span>
      </div>

      <div className="post-card__content">
        <h3 className="post-card__title">{title}</h3>

        <p className="post-card__meta">
          r/{subreddit} · u/{author}
        </p>

        <div className="post-card__stats">
          <span>▲ {votes} votes</span>
          <span>💬 {comments} comments</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
