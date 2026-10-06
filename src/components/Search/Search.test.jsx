import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search", () => {
  test("renders the search input and button", () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  test("calls onSearch when the user types", () => {
    const handleSearch = jest.fn();

    render(<Search onSearch={handleSearch} />);

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "gaming" },
    });

    expect(handleSearch).toHaveBeenCalledWith("gaming");
  });

  test("calls onSearch when the form is submitted", () => {
    const handleSearch = jest.fn();

    render(<Search onSearch={handleSearch} />);

    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, {
      target: { value: "technology" },
    });

    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledWith("technology");
  });

  test("clears the search when the Clear button is clicked", () => {
    const handleSearch = jest.fn();

    render(<Search onSearch={handleSearch} />);

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "gaming" },
    });

    const clearButton = screen.getByRole("button", { name: "Clear" });

    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
    expect(handleSearch).toHaveBeenLastCalledWith("");
  });
});
