import { useSsrPostsList } from "@/hooks/api/posts";
import DashboardPage from "../page"; // Your component that uses the `usePostsList` hook
import { render, screen } from "@testing-library/react";

jest.mock("@/hooks/api/posts", () => ({
  useSsrPostsList: jest.fn(),
}));

describe("dashboard page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render successfully", async () => {
    const mockPosts = [
      { userId: 1, id: 1, title: "Post 1", body: "This is post 1" },
      { userId: 2, id: 2, title: "Post 2", body: "This is post 2" },
    ];

    const Dashboard = await DashboardPage();

    (useSsrPostsList as jest.Mock).mockResolvedValueOnce(mockPosts);

    render(Dashboard);

    expect(await screen.findByText(/Large Data page/i)).toBeInTheDocument();
  });
});
