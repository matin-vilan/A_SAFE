import { fireEvent, render, screen } from "@testing-library/react";
import DashboardContainer from "../dashboardContainer";
import { usePostsList } from "@/hooks/api/posts";
import { useRouter } from "next/navigation";

jest.mock("@/hooks/api/posts", () => ({
  usePostsList: jest.fn(),
}));

describe("dashboard page", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render posts cards", async () => {
    const mockPosts = [
      { userId: 1, id: 1, title: "Post 1", body: "This is post 1" },
      { userId: 2, id: 2, title: "Post 2", body: "This is post 2" },
    ];

    (usePostsList as jest.Mock).mockResolvedValueOnce(mockPosts);

    render(<DashboardContainer posts={mockPosts} />); // ARRANGE

    expect(await screen.findByText("Title : Post 1")).toBeInTheDocument();
  });

  it("should navigate to chart page after click on chart button", async () => {
    const mockPosts = [
      { userId: 1, id: 1, title: "Post 1", body: "This is post 1" },
      { userId: 2, id: 2, title: "Post 2", body: "This is post 2" },
    ];

    (usePostsList as jest.Mock).mockResolvedValueOnce(mockPosts);

    render(<DashboardContainer posts={mockPosts} />);

    const chartBtn = screen.getByText("Chart page");

    fireEvent.click(chartBtn);

    expect(pushMock).toHaveBeenCalledWith("/dashboard/chart");
  });
});
