import Card from "../../components/Card/Card";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

export default function Draw() {
  const participants = useParticipantsList();

  return (
    <Card>
      <section>
        <h1>Quem vai tirar o papelzinho?</h1>
        <form action="">
          <select name="currentParticipant" id="currentParticipant">
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
        </form>
      </section>
    </Card>
  );
}
