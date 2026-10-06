import { render, screen, fireEvent } from "@testing-library/react";
import PostCard from "./PostCard";

describe("PostCard", () => {
  const post = {
    title: "A test Reddit post",
    subreddit: "reactjs",
    author: "testuser",
    votes: 125,
    comments: 42,
  };

  const renderPostCard = () => {
    render(
      <PostCard
        title={post.title}
        subreddit={post.subreddit}
        author={post.author}
        votes={post.votes}
        comments={post.comments}
      />,
    );
  };

  test("renders the post information", () => {
    renderPostCard();

    expect(
      screen.getByRole("heading", { name: post.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(`r/${post.subreddit} · u/${post.author}`),
    ).toBeInTheDocument();

    expect(screen.getByText(String(post.votes))).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Upvote post" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Downvote post" }),
    ).toBeInTheDocument();

    expect(screen.getByText(/42\s*comments/)).toBeInTheDocument();
  });

  test("increases the vote count when the post is upvoted", () => {
    renderPostCard();

    const upvoteButton = screen.getByRole("button", {
      name: "Upvote post",
    });

    fireEvent.click(upvoteButton);

    expect(screen.getByText("126")).toBeInTheDocument();
    expect(upvoteButton).toHaveAttribute("aria-pressed", "true");
  });

  test("removes the upvote when the upvote button is clicked again", () => {
    renderPostCard();

    const upvoteButton = screen.getByRole("button", {
      name: "Upvote post",
    });

    fireEvent.click(upvoteButton);
    fireEvent.click(upvoteButton);

    expect(screen.getByText("125")).toBeInTheDocument();
    expect(upvoteButton).toHaveAttribute("aria-pressed", "false");
  });

  test("decreases the vote count when the post is downvoted", () => {
    renderPostCard();

    const downvoteButton = screen.getByRole("button", {
      name: "Downvote post",
    });

    fireEvent.click(downvoteButton);

    expect(screen.getByText("124")).toBeInTheDocument();
    expect(downvoteButton).toHaveAttribute("aria-pressed", "true");
  });

  test("switches correctly from an upvote to a downvote", () => {
    renderPostCard();

    const upvoteButton = screen.getByRole("button", {
      name: "Upvote post",
    });

    const downvoteButton = screen.getByRole("button", {
      name: "Downvote post",
    });

    fireEvent.click(upvoteButton);

    expect(screen.getByText("126")).toBeInTheDocument();

    fireEvent.click(downvoteButton);

    expect(screen.getByText("124")).toBeInTheDocument();
    expect(upvoteButton).toHaveAttribute("aria-pressed", "false");
    expect(downvoteButton).toHaveAttribute("aria-pressed", "true");
  });
});
