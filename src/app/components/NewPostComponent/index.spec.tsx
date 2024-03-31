import { fireEvent, render, screen } from "@testing-library/react";
import Component from "./";

describe("Add Post Component", () => {
  it("renders the correct post component", () => {
    render(<Component onSubmit={() => {}} />);

    const element = screen.getByPlaceholderText("Digite seu nome");
    const element2 = screen.getByPlaceholderText("Mensagem");
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  it("simulates typing in the input field", () => {
    render(<Component onSubmit={() => {}} />);

    const NameInputElement = screen.getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;
    const MsgInputElement = screen.getByPlaceholderText(
      "Mensagem"
    ) as HTMLInputElement;

    fireEvent.change(NameInputElement, { target: { value: "Jackson Aguiar" } });
    fireEvent.change(MsgInputElement, { target: { value: "Testing!" } });

    expect(NameInputElement.value).toBe("Jackson Aguiar");
    expect(MsgInputElement.value).toBe("Testing!");
  });

  it("test clear function", () => {
    render(<Component onSubmit={() => {}} />);

    const NameInputElement = screen.getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;
    const MsgInputElement = screen.getByPlaceholderText(
      "Mensagem"
    ) as HTMLInputElement;

    fireEvent.change(NameInputElement, { target: { value: "Jackson Aguiar" } });
    fireEvent.change(MsgInputElement, { target: { value: "Testing!" } });

    fireEvent.click(screen.getByTestId("clear-button"));

    expect(NameInputElement.value).toBe("");
    expect(MsgInputElement.value).toBe("");
  });
});
