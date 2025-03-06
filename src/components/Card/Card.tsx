import styled from "styled-components";

export const StyledCard = styled.div`
  background: #fff9eb;
  border: 2px solid #000;
  border-radius: 64px 64px 0px 0px;
  padding: 80px;
  display: flex;
  margin-top: -32px;
  justify-content: center;
`;

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}
