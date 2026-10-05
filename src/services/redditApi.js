const REDDIT_API_URL = "https://www.reddit.com";

export async function fetchPosts(category = "popular") {
  const response = await fetch(`${REDDIT_API_URL}/r/${category}.json?limit=20`);

  if (!response.ok) {
    throw new Error("Unable to fetch Reddit posts");
  }

  const data = await response.json();

  return data.data.children.map((item) => item.data);
}
