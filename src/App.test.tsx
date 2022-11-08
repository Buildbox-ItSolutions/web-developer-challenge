import App from "./App";
import { screen, render } from "@testing-library/react";
import { it, describe } from "vitest";

describe("App test", () => {
  it("should render h1", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
