import { render, fireEvent, screen } from "@testing-library/react";
import History from "./components/History";
import Calculator from "./components/Calculator";

describe("Fetch History", () => {
  it("fetches and displays calculation history", async () => {
    render(<History />);
    const historyItems = await screen.findAllByRole("listitem");
    expect(historyItems).toHaveLength(4);
  });
});

describe("Calculator Operation", () => {
  it("Renders the calculator and calculates arithmetic operations", async () => {
    render(<Calculator />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByText("=");

    fireEvent.change(inputField, { target: { value: "2+2" } });
    fireEvent.click(calculateButton);

    const result = screen.getByTestId("result");
    expect(result).toBeInTheDocument("result: 4");
  });

  it("Handles invalid operations", async () => {
    render(<Calculator />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByText("=");

    fireEvent.change(inputField, { target: { value: "invalid" } });
    fireEvent.click(calculateButton);

    const errorMessage = await screen.findByText(
      "Invalid arithmetic operation"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
