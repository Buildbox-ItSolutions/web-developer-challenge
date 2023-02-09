import UploadImg from "./UploadImg";
import { describe, it, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";

describe("UploadImg Tests", () => {
  const postFormMock = {
    name: "",
    message: "",
    photo: "",
    id: 1,
  };

  const mockFile = new File(["hello"], "hello.png", { type: "image/png" });

  const postFormMock2 = {
    name: "",
    message: "",
    photo: "blob",
    id: 1,
  };

  it("Should Upload Photo File", async () => {
    const handlePostFormMock = vi.fn();

    render(
      <UploadImg setPostForm={handlePostFormMock} postForm={postFormMock} />
    );

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    fireEvent.change(inputFile, { target: { files: [mockFile] } });

    //@ts-ignore
    expect(inputFile.files[0]).toStrictEqual(mockFile);
    //@ts-ignore
    expect(inputFile.files[0]).toStrictEqual(mockFile);
    //@ts-ignore
    expect(inputFile.files).toHaveLength(1);
    expect(handlePostFormMock).toHaveBeenCalled();
  });
  it("Should removed Uploaded Photo File", async () => {
    const handlePostFormMock = vi.fn();

    render(
      <UploadImg setPostForm={handlePostFormMock} postForm={postFormMock2} />
    );

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    fireEvent.change(inputFile, { target: { files: [mockFile] } });

    const deleteIcon = screen.getByTestId("trash-icon");

    fireEvent.click(deleteIcon);

    expect(handlePostFormMock).toHaveBeenCalled();
  });
});
