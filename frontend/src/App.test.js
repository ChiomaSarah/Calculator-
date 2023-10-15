import { render, fireEvent, screen } from "@testing-library/react";
import History from "./components/History";
import Calculator from "./components/Calculator";

describe("Fetch History", () => {
  it("fetches and displays the history", async () => {
    render(<History />);
    expect(await screen.findAllByRole("listitem")).toHaveLength(4);
  });
});

describe("Calculator Operation", () => {
  it("Renders the calculator and calculates arithmetic operations", async () => {
    render(<Calculator />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByText("=");

    fireEvent.change(inputField, { target: { value: "2+2" } });
    fireEvent.click(calculateButton);

    expect(screen.getByTestId("result")).toBeInTheDocument("result: 4");
  });

  it("Handles invalid operations", async () => {
    render(<Calculator />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByText("=");

    fireEvent.change(inputField, { target: { value: "invalid" } });
    fireEvent.click(calculateButton);

    expect(
      await screen.findByText("Invalid arithmetic operation")
    ).toBeInTheDocument();
  });
});
