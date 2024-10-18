import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePageContainer from "../src/app/components/home";

describe("Home", () => {
  it("should have Hello All! text", () => {
    render(<HomePageContainer />); // ARRANGE
    const myEl = screen.getByText(/Hello All!/i); // ACT
    expect(myEl).toBeInTheDocument(); // ASSERT
  });
});
