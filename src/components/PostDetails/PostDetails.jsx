import "./PostDetails.css";

function PostDetails({ post, onBack }) {
  const comments = [
    {
      id: 1,
      author: "community_member",
      text: "Interesting post. Thanks for sharing this!",
    },
    {
      id: 2,
      author: "another_user",
      text: "I agree with this. Would be interested to hear what others think.",
    },
    {
      id: 3,
      author: "reddit_reader",
      text: "This is a really good discussion topic.",
    },
  ];

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

        <section className="post-details__comments">
          <h2>Comments</h2>

          <div className="post-details__comment-list">
            {comments.map((comment) => (
              <article className="post-details__comment" key={comment.id}>
                <p className="post-details__comment-author">
                  u/{comment.author}
                </p>

                <p className="post-details__comment-text">{comment.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default PostDetails;
