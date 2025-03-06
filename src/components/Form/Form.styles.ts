import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding-left: 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    border-radius: 45px;
    margin-bottom: 18px;
    box-shadow: 0px 2px 0px 1px #000;
  }
`;

export const StyledButton = styled.button`
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  height: 82px;
  width: 30%;
  box-sizing: border-box;
  border: 2px solid black;
  font-size: 20px;
  color: #000;
  box-shadow: 2px 2px 0px 1px #000;
  cursor: pointer;
  background-color: #c4c4c4;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 800px) {
    display: block;
    margin: 16px auto 0;
    width: 220px;
    border-radius: 45px;
  }
`;

export const ErrorAlert = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 16px;
  border: 1px solid #f5c2c7;
  border-radius: 8px;

  @media screen and (max-width: 800px) {
    margin: 48px 0;
  }
`;
