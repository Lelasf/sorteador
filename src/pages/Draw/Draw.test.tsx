import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Draw from "./Draw";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participants = ["ana", "catarina", "jorel"];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });
});
