import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { conductDraw } from "../helpers/conductDraw";

export const useRandomizer = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = conductDraw(participants);
    setResult(result);
  };
};
