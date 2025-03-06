import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  background-image: url("/images/logo.png");
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url("/images/logo-pequeno.png");
    width: 235px;
    height: 199px;
  }
`;

const ParticipantImage = styled.img`
  z-index: 1;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo role="img" aria-label="Sorter Logo" />
      <ParticipantImage
        src="/images/participante.png"
        alt="Participant holding a gift"
      />
    </StyledHeader>
  );
}
