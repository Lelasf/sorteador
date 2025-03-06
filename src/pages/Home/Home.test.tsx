import { RecoilRoot } from "recoil";
import Home from "./Home";
import { render } from "@testing-library/react";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...actualModule,
    useNavigate: () => mockNavigate,
  };
});

describe("a pagina de configuração", () => {
  test("deve ser renderizada corretament", () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
