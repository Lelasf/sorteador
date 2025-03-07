import { useState } from "react";
import Card from "../../components/Card/Card";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { useDrawResult } from "../../state/hooks/useDrawResult";
import { StyledButton } from "../../components/Footer/Footer.styles";
import {
  StyledFooterImg,
  StyledResult,
  StyledSection,
  StyledSelect,
} from "./Draw.styles";

export default function Draw() {
  const participants = useParticipantsList();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const result = useDrawResult();

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Participante selecionado:", currentParticipant);

    if (result.has(currentParticipant)) {
      const friend = result.get(currentParticipant);
      setSecretFriend(friend!);
      // setSecretFriend(result.get(currentParticipant)!);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentParticipant(event.target.value);
  };

  return (
    <Card>
      <StyledSection>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={draw}>
          <StyledSelect
            required
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Selecione o seu nome"
            value={currentParticipant}
            onChange={handleChange}
          >
            <option>Selecione o seu nome</option>
            {participants.map((participant) => (
              <option key={participant} value={participant}>
                {participant}
              </option>
            ))}
          </StyledSelect>
          <p style={{ marginBottom: "24px" }}>
            Clique em sortear para ver quem é seu amigo secreto!
          </p>
          <StyledButton type="submit">Sortear</StyledButton>
        </form>
        {secretFriend && (
          <StyledResult role="alert">{secretFriend}</StyledResult>
        )}

        <StyledFooterImg>
          <img src="/images/aviao.png" alt="um desenho de aviao de papel" />
        </StyledFooterImg>
      </StyledSection>
    </Card>
  );
}
