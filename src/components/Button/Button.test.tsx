import Button from ".";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Button tests", () => {
  it("Should render contained button variant when variant is not passed", () => {
    render(<Button>btnTest</Button>);
    const button = screen.getByText("btnTest");

    expect(button).toBeInTheDocument();
  });
  it("Should render text button variant when variant text", () => {
    render(<Button variant="text">btnTest</Button>);
    const button = screen.getByText("btnTest");

    expect(button).toBeInTheDocument();
  });
});
