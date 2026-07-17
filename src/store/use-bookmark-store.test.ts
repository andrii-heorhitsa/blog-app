import { describe, it, expect, beforeEach } from "vitest";
import { useBookmarkStore } from "./use-bookmark-store";

describe("useBookmarkStore", () => {
  // This block runs automatically BEFORE each individual test.
  // We reset the array to [] to prevent state pollution between tests.
  beforeEach(() => {
    useBookmarkStore.setState({ bookmarkedIds: [] });
  });

  // Test 1: Verifying the initial state
  it("should have an initial state with an empty array of bookmarks", () => {
    /// Act: Get the current state of the store
    const state = useBookmarkStore.getState();

    // Assert: Expect the array to be empty
    expect(state.bookmarkedIds).toEqual([]);
  });

  // Test 2: Adding a new bookmark
  it("should add an ID to bookmarks using toggleBookmark if it is not present", () => {
    // Act: Invoke the toggle function for ID 42
    useBookmarkStore.getState().toggleBookmark(42);

    // Act: Get the updated state
    const state = useBookmarkStore.getState();

    // Assert: The array should now contain [42]
    expect(state.bookmarkedIds).toEqual([42]);
  });

  // Test 3: Removing a bookmark via second toggle
  it("should remove an ID from bookmarks using toggleBookmark if it is already present", () => {
    // Arrange: Manually set ID 42 in the store as if it was already saved
    useBookmarkStore.setState({ bookmarkedIds: [42] });

    // Act: Call toggleBookmark(42) again
    useBookmarkStore.getState().toggleBookmark(42);
    const state = useBookmarkStore.getState();

    // Assert: The array should be empty again
    expect(state.bookmarkedIds).toEqual([]);
  });

  // Test 4: Direct removal via removeBookmark
  it("should directly remove an ID using the removeBookmark function", () => {
    // Arrange: Populate the store with two IDs: 100 and 200
    useBookmarkStore.setState({ bookmarkedIds: [100, 200] });

    // Act: Remove specifically ID 100
    useBookmarkStore.getState().removeBookmark(100);
    const state = useBookmarkStore.getState();

    // Assert: Only [200] should remain in the array
    expect(state.bookmarkedIds).toEqual([200]);
  });
});
