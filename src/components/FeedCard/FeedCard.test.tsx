import FeedCard from ".";
import { it, describe, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";

describe("FeedCard tests", () => {
  it("Should render FeedCard", () => {
    const onDelete = vi.fn();

    render(
      <FeedCard
        name="carlos"
        message="message test"
        onDelete={onDelete}
        photo="photo.png"
      />
    );

    const deletePostIcon = screen.getByTestId("remove-card-icon");

    fireEvent.click(deletePostIcon);

    expect(onDelete).toHaveBeenCalled();
  });
});
