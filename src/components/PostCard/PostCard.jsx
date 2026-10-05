import { useState } from "react";
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
  const [vote, setVote] = useState(0);

  const handleVote = (event, value) => {
    event.stopPropagation();

    setVote((currentVote) => (currentVote === value ? 0 : value));
  };

  const displayedVotes = votes + vote;

  return (
    <article className="post-card">
      <div className="post-card__image">
        <span>Post image</span>
      </div>

      <div className="post-card__content">
        <button
          type="button"
          className="post-card__button"
          onClick={onClick}
          aria-label={`Open post: ${title}`}
        >
          <h3 className="post-card__title">{title}</h3>

          <p className="post-card__meta">
            r/{subreddit} · u/{author}
          </p>

          <p className="post-card__description">{selftext}</p>
        </button>

        <div className="post-card__actions">
          <div className="post-card__votes">
            <button
              type="button"
              className={`post-card__vote ${
                vote === 1 ? "post-card__vote--upvoted" : ""
              }`}
              onClick={(event) => handleVote(event, 1)}
              aria-label="Upvote post"
              aria-pressed={vote === 1}
            >
              ▲
            </button>

            <span>{displayedVotes}</span>

            <button
              type="button"
              className={`post-card__vote ${
                vote === -1 ? "post-card__vote--downvoted" : ""
              }`}
              onClick={(event) => handleVote(event, -1)}
              aria-label="Downvote post"
              aria-pressed={vote === -1}
            >
              ▼
            </button>
          </div>

          <span className="post-card__comments">💬 {comments} comments</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
