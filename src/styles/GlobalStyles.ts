import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: ${({ theme }) => theme.colors.bgBlue};
    border: 2px solid ${({ theme }) => theme.colors.dark};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  section {
  width: 100%;
  text-align: center;
  max-width: 900px;
}

h2 {
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 36px;
  color: #4B69FD;
}

ul li {
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0;
}
`;

export default GlobalStyles;
