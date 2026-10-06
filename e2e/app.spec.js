import { test, expect } from "@playwright/test";

test.describe("Reddit application", () => {
  test("loads and allows the user to interact with posts", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Reddit/i);

    // Wait for the initial posts to load.
    await expect(
      page.getByRole("heading", { name: "Popular Posts" }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "The future of technology is changing faster than ever",
      }),
    ).toBeVisible();

    // Search for a specific post.
    const searchInput = page.getByRole("searchbox", { name: "Search posts" });


    await searchInput.fill("technology");

    await expect(
      page.getByRole("heading", {
        name: "The future of technology is changing faster than ever",
      }),
    ).toBeVisible();

    // Open the post details.
    await page
      .getByRole("heading", {
        name: "The future of technology is changing faster than ever",
      })
      .click();

    await expect(
      page.getByRole("heading", {
        name: "The future of technology is changing faster than ever",
      }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "A discussion about the latest developments in technology and how they may affect everyday life.",
      ),
    ).toBeVisible();


    // Return to the post list.
    await page.getByRole("button", { name: /Back to posts/i }).click();

    await expect(
      page.getByRole("heading", {
        name: "The future of technology is changing faster than ever",
      }),
    ).toBeVisible();

    // Test the upvote interaction.
    const postCard = page.locator(".post-card").first();
    const upvoteButton = postCard.getByRole("button", {
      name: "Upvote post",
    });

    const voteCount = postCard.locator(".post-card__votes span");

    await expect(voteCount).toHaveText("1248");

    await upvoteButton.click();

    await expect(voteCount).toHaveText("1249");
    await expect(upvoteButton).toHaveAttribute("aria-pressed", "true");

    // Clicking again removes the upvote.
    await upvoteButton.click();

    await expect(voteCount).toHaveText("1248");
    await expect(upvoteButton).toHaveAttribute("aria-pressed", "false");
  });
});
