import PostsListPage from "../page";
import { render, screen } from "@testing-library/react";
import { useSsrPostsList } from "@/hooks/api/posts";

jest.mock("@/hooks/api/posts", () => ({
  useSsrPostsList: jest.fn(),
}));

describe("PostsListPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render posts", async () => {
    const mockPosts = [
      { userId: 1, id: 1, title: "Post 1", body: "This is post 1" },
      { userId: 2, id: 2, title: "Post 2", body: "This is post 2" },
    ];

    (useSsrPostsList as jest.Mock).mockReturnValue(mockPosts);

    const postsListPage = await PostsListPage();

    render(postsListPage);

    expect(screen.getByText("Title : Post 1")).toBeInTheDocument();
  });
});
