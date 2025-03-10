import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe("o comportamento do Form.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    // encontrar o botão
    const button = screen.getByRole("button");

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("adcionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    // encontrar o botão
    const button = screen.getByRole("button");

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "leonardo ferrari",
      },
    });

    // clicar no botao de submeter
    fireEvent.click(button);

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    // garantir que o input nao tenha um valor
    expect(input).toHaveValue("");
  });

  test("Nomes duplicados nao podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "leonardo ferrari",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "leonardo ferrari",
      },
    });

    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe(
      "Nomes duplicados nao sao permitidos!"
    );
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "leonardo ferrari",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "leonardo ferrari",
      },
    });

    fireEvent.click(button);
    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
