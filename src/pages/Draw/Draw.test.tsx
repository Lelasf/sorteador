import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Draw from "./Draw";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { useDrawResult } from "../../state/hooks/useDrawResult";

jest.mock("../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock("../../state/hooks/useDrawResult", () => {
  return {
    useDrawResult: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participants = ["Ana", "Catarina", "Jorel"];

  const result = new Map([
    ["Ana", "Jorel"],
    ["Catarina", "Ana"],
    ["Jorel", "Catarina"],
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useDrawResult as jest.Mock).mockReturnValue(result);
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });

  test("o amigo secreto e exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");
    expect(secretFriend).toBeInTheDocument();
  });
});
