import styled from "styled-components";

export const styledTitle = styled.h2`
  margin-bottom: 34px;
`;

export const StyledSelect = styled.select`
  border-radius: 45px;
  height: 82px;
  width: 70%;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;
  margin-bottom: 34px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    select {
      width: 100%;
    }
  }
`;

export const StyledResult = styled.p`
  font-size: 25px;
  font-weight: 400;
  margin: 32px 0;
  color: #fe652bfc;
  margin-bottom: 24px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFooterImg = styled.footer`
  margin: 20px;
`;
