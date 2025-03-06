import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantsList from "./ParticipantsList";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn()
  }
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  const participants = ["Ana", "Catarina"];

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
