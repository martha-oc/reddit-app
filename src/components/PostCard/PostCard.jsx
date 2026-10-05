import "./PostCard.css";

function PostCard() {
  return (
    <article className="post-card">
      <div className="post-card__image">
        <span>Post image</span>
      </div>

      <div className="post-card__content">
        <h3 className="post-card__title">
          This is an example Reddit post title
        </h3>

        <p className="post-card__meta">
          r/technology · u/username · 2 hours ago
        </p>

        <div className="post-card__stats">
          <span>▲ 1,234 votes</span>
          <span>💬 245 comments</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
