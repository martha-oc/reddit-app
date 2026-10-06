import { render, screen } from "@testing-library/react";
import PostDetails from "./PostDetails";

describe("PostDetails", () => {
  const post = {
    title: "A detailed Reddit post",
    subreddit: "reactjs",
    author: "testuser",
    selftext: "This is the body of the Reddit post.",
    score: 250,
    num_comments: 37,
  };

  test("renders the post details", () => {
    render(<PostDetails post={post} onBack={() => {}} />);

    expect(
      screen.getByRole("heading", { name: post.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(`r/${post.subreddit} · u/${post.author}`),
    ).toBeInTheDocument();

    expect(screen.getByText(post.selftext)).toBeInTheDocument();

    expect(screen.getByText(/250\s*votes/)).toBeInTheDocument();

    expect(screen.getByText(/37\s*comments/)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Back to posts/i }),
    ).toBeInTheDocument();
  });

  test("calls onBack when the back button is clicked", () => {
    const handleBack = jest.fn();

    render(<PostDetails post={post} onBack={handleBack} />);

    screen.getByRole("button", { name: /Back to posts/i }).click();

    expect(handleBack).toHaveBeenCalledTimes(1);
  });
});
