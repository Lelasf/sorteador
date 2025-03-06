import shuffle from "just-shuffle";

export function conductDraw(participants: string[]) {
  const numberOfParticipants = participants.length;
  const shuffled = shuffle(participants);
  const result = new Map<string, string>();

  for (let index = 0; index < numberOfParticipants; index++) {
    const friendIndex = index === numberOfParticipants - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[friendIndex]);
  }

  return result;
}
