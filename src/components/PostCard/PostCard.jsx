import "./PostCard.css";

function PostCard({
  title,
  subreddit,
  author,
  votes,
  comments,
  selftext,
  onClick,
}) {
  return (
    <article className="post-card">
      <button
        type="button"
        className="post-card__button"
        onClick={onClick}
        aria-label={`Open post: ${title}`}
      >
        <div className="post-card__image">
          <span>Post image</span>
        </div>

        <div className="post-card__content">
          <h3 className="post-card__title">{title}</h3>

          <p className="post-card__meta">
            r/{subreddit} · u/{author}
          </p>

          <p className="post-card__description">{selftext}</p>

          <div className="post-card__stats">
            <span>▲ {votes} votes</span>
            <span>💬 {comments} comments</span>
          </div>
        </div>
      </button>
    </article>
  );
}

export default PostCard;
