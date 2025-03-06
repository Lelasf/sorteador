import { conductDraw } from "./conductDraw";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante nao sorteie o proprio nome", () => {
    const participants = [
      "Ana",
      "Catarina",
      "Joao",
      "Jorel",
      "Leonardo",
      "Natalia",
    ];

    const raffle = conductDraw(participants);
    participants.forEach((participant) => {
      const secretFriend = raffle.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
