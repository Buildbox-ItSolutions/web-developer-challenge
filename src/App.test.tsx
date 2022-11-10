import App from "./App";
import { screen, render, fireEvent } from "@testing-library/react";
import { it, describe, vi } from "vitest";

describe("App test", () => {
  it("Should Upload Photo File", async () => {
    render(<App />);
    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    fireEvent.change(inputFile, { target: { files: [fakeFile] } });

    const imageTag = screen.getByTestId(/image-uploaded/i);

    //@ts-ignore
    expect(inputFile.files[0]).toStrictEqual(fakeFile);
    //@ts-ignore
    expect(inputFile.files[0]).toStrictEqual(fakeFile);
    //@ts-ignore
    expect(inputFile.files).toHaveLength(1);
    expect(imageTag).toBeInTheDocument();
  });
  it("Should removed Uploaded Photo File", async () => {
    render(<App />);
    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    fireEvent.change(inputFile, { target: { files: [fakeFile] } });

    const deleteIcon = screen.getByTestId("trash-icon");

    fireEvent.click(deleteIcon);

    const imageTag = screen.getByTestId("image-placeholder");

    expect(imageTag).toBeInTheDocument();
  });
  it("Should fill inputs when user types", () => {
    render(<App />);

    const inputName = screen.getByPlaceholderText("Digite seu nome");

    const inputText = screen.getByPlaceholderText("Mensagem");

    const button = screen.getByText("Publicar");

    fireEvent.change(inputName, { target: { value: "my name" } });
    fireEvent.click(inputText, { target: { value: "my message" } });

    expect(inputName).toHaveValue("my name");
    expect(inputText).toHaveValue("my message");
    expect(button).toBeDisabled();
  });

  it("Should clean inputs when user clicks Descartar button", () => {
    render(<App />);

    const inputName = screen.getByPlaceholderText("Digite seu nome");

    const inputText = screen.getByPlaceholderText("Mensagem");

    const button = screen.getByText("Descartar");

    fireEvent.change(inputName, { target: { value: "my name" } });
    fireEvent.click(inputText, { target: { value: "my message" } });
    fireEvent.click(button);

    expect(inputName).toHaveValue("");
    expect(inputText).toHaveValue("");
  });

  it("Should make a post when all inputs are filler", async () => {
    render(<App />);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const inputName = screen.getByPlaceholderText("Digite seu nome");

    const inputText = screen.getByPlaceholderText("Mensagem");

    const button = screen.getByText("Publicar");

    fireEvent.change(inputName, { target: { value: "my name" } });
    fireEvent.change(inputText, { target: { value: "my first post" } });
    fireEvent.change(inputFile, { target: { files: [fakeFile] } });

    const imageTag = screen.getByTestId(/image-uploaded/i);

    fireEvent.click(button);

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(imageTag).toBeInTheDocument();
    expect(screen.getByText("my first post")).toBeInTheDocument();
  });
  it("Should make a post when all inputs are filler", async () => {
    render(<App />);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const inputName = screen.getByPlaceholderText("Digite seu nome");

    const inputText = screen.getByPlaceholderText("Mensagem");

    const button = screen.getByText("Publicar");

    fireEvent.change(inputName, { target: { value: "my name" } });
    fireEvent.change(inputText, { target: { value: "my first post" } });
    fireEvent.change(inputFile, { target: { files: [fakeFile] } });

    const imageTag = screen.getByTestId(/image-uploaded/i);

    fireEvent.click(button);

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(imageTag).toBeInTheDocument();
    expect(screen.getByText("my first post")).toBeInTheDocument();
  });
  it("Should remove a post when user click delete icon", async () => {
    render(<App />);

    const createObjectURLMock = vi.fn(() => "hello.png");

    window.URL.createObjectURL = createObjectURLMock;

    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const inputFile = screen.getByTestId(/image-uploader-input/i);

    const inputName = screen.getByPlaceholderText("Digite seu nome");

    const inputText = screen.getByPlaceholderText("Mensagem");

    const button = screen.getByText("Publicar");

    fireEvent.change(inputName, { target: { value: "my name" } });
    fireEvent.change(inputText, { target: { value: "my first post" } });
    fireEvent.change(inputFile, { target: { files: [fakeFile] } });
    fireEvent.click(button);

    const removePostIcon = screen.getByTestId("remove-card-icon");

    fireEvent.click(removePostIcon);

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(screen.queryByText("my first post")).not.toBeInTheDocument();
  });
});
