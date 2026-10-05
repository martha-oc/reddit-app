import mockPosts from "./mockPosts";

export async function fetchPosts(category = "popular") {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (category === "popular") {
    return mockPosts;
  }

  return mockPosts.filter(
    (post) => post.subreddit.toLowerCase() === category.toLowerCase(),
  );
}
