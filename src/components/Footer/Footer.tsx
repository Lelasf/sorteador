import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { StyledButton, StyledFooter } from "./Footer.styles";
import { useRandomizer } from "../../state/hooks/useRandomizer";

export default function Footer() {
  const participants = useParticipantsList();

  const navigateTo = useNavigate();
  const draw = useRandomizer();

  const start = () => {
    draw();
    navigateTo("/draw");
  };

  return (
    <StyledFooter>
      <StyledButton disabled={participants.length < 3} onClick={start}>
        Iniciar Brincadeira!
      </StyledButton>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </StyledFooter>
  );
}
