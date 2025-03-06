import { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";
import {
  ErrorAlert,
  FormGroup,
  StyledButton,
  StyledInput,
} from "./Form.styles";

export default function Form() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addOnList = useAddParticipant();
  const errorMessage = useErrorMessage();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addOnList(name);

    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <FormGroup>
        <StyledInput
          ref={inputRef}
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <StyledButton disabled={!name}>Adcionar</StyledButton>
      </FormGroup>
      {errorMessage && <ErrorAlert role="alert">{errorMessage}</ErrorAlert>}
    </form>
  );
}
