import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b; /* Cor fixa do botão */
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd; /* Cor de hover fixa */
  }
`;

export const ErrorAlert = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 16px;
  border: 1px solid #f5c2c7;
  border-radius: 8px;
`;
