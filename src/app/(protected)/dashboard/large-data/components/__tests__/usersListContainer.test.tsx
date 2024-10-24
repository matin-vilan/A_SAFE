import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UsersListContainer from "../usersListContainer";
import { useUsersList } from "@/hooks/api/users";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("@/hooks/api/users", () => ({
  useUsersList: jest.fn(),
}));

describe("UsersListContainer", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it("should render users table input search correctly", () => {
    const mockUsers = [
      {
        info: { page: 1, results: 1, seed: "", version: "" },
        results: [
          {
            id: {
              name: "test",
              value: "test",
            },
            phone: "989898989898",
            location: { city: "tehran", postcode: "123456" },
          },
        ],
      },
    ];

    (useUsersList as jest.Mock).mockResolvedValueOnce(mockUsers);
    render(<UsersListContainer />);

    const searchInput = screen.getByPlaceholderText("Search Names ...");

    expect(searchInput).toBeInTheDocument();
  });

  it("should displays loading state", () => {
    (useUsersList as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<UsersListContainer />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should displays user results", async () => {
    const mockUsers = {
      info: { page: 1, results: 1, seed: "", version: "" },
      results: [
        {
          id: {
            name: "test",
            value: "test",
          },
          phone: "989898989898",
          location: { city: "tehran", postcode: "123456" },
        },
      ],
    };

    (useUsersList as jest.Mock).mockReturnValue({
      data: mockUsers,
      isLoading: false,
    });

    render(<UsersListContainer />);

    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });

  it("should filters results based on search input", async () => {
    const mockUsers = {
      info: { page: 1, results: 1, seed: "", version: "" },
      results: [
        {
          id: {
            name: "test",
            value: "test",
          },
          phone: "989898989898",
          location: { city: "tehran", postcode: "123456" },
        },
        {
          id: {
            name: "matin",
            value: "vilan",
          },
          phone: "989898989898",
          location: { city: "tehran", postcode: "123456" },
        },
      ],
    };

    (useUsersList as jest.Mock).mockReturnValue({
      data: mockUsers,
      isLoading: false,
    });

    render(<UsersListContainer />);

    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText(/search names .../i), {
      target: { value: "matin" },
    });

    expect(await screen.findByText(/matin/i)).toBeInTheDocument();
  });
});
