import { fireEvent, render, screen } from "@testing-library/react";
import Component from "./";

describe("Card Component", () => {
  it("renders the correct texts", () => {
    render(
      <Component
        img=""
        msg="testando msg"
        name="name test"
        onRemove={() => {}}
      />
    );

    const msg = screen.getByText("testando msg");
    const name = screen.getByText("name test");

    expect(msg).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it("test remove button call", () => {
    const mockOnRemove = jest.fn();

    render(
      <Component
        img=""
        msg="testando msg"
        name="name test"
        onRemove={mockOnRemove}
      />
    );

    fireEvent.click(screen.getByTestId("remove-button"));

    expect(mockOnRemove).toHaveBeenCalled();
  });
});
