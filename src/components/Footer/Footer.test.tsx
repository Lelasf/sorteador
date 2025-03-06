import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { fireEvent, render, screen } from "@testing-library/react";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockDraw = jest.fn();

jest.mock("../../state/hooks/useRandomizer", () => {
  return {
    useRandomizer: () => mockDraw,
  };
});

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...actualModule,
    useNavigate: () => mockNavigate,
  };
});

describe("onde nao existem participantes suficientes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  test("a brincadeira nao pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });

  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/draw");
    expect(mockDraw).toHaveBeenCalledTimes(1);
  });
});
