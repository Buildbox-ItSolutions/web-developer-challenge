import FeedContainer from "./FeedContainer";
import { vi, describe, it } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";

describe("FeedContainerTest", () => {
  const postList = [
    {
      name: "Carlos",
      message: "test",
      photo: "blob",
      id: 1,
    },
  ];

  it("should render postList items", () => {
    const handleRemovePostMock = vi.fn();
    render(
      <FeedContainer
        handleRemovePost={handleRemovePostMock}
        postList={postList}
      />
    );

    expect(screen.getByText("Carlos")).toBeInTheDocument();
  });

  it("Should remove a post when user click delete icon", async () => {
    const handleRemovePostMock = vi.fn();
    render(
      <FeedContainer
        handleRemovePost={handleRemovePostMock}
        postList={postList}
      />
    );

    const removePostIcon = screen.getByTestId("remove-card-icon");

    fireEvent.click(removePostIcon);

    expect(handleRemovePostMock).toHaveBeenCalled();

    // const createObjectURLMock = vi.fn(() => "hello.png");

    // window.URL.createObjectURL = createObjectURLMock;

    // const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    // const inputFile = screen.getByTestId(/image-uploader-input/i);

    // const inputName = screen.getByPlaceholderText("Digite seu nome");

    // const inputText = screen.getByPlaceholderText("Mensagem");

    // const button = screen.getByText("Publicar");

    // fireEvent.change(inputName, { target: { value: "my name" } });
    // fireEvent.change(inputText, { target: { value: "my first post" } });
    // fireEvent.change(inputFile, { target: { files: [fakeFile] } });
    // fireEvent.click(button);

    // const removePostIcon = screen.getByTestId("remove-card-icon");

    // fireEvent.click(removePostIcon);

    // expect(createObjectURLMock).toHaveBeenCalled();
    // expect(screen.queryByText("my first post")).not.toBeInTheDocument();
  });
});
