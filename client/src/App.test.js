import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header for the technical assessment", () => {
  render(<App />);
  const linkElement = screen.getByText(/technical assessment/i);
  expect(linkElement).toBeInTheDocument();
});
