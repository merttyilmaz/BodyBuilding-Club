import { useQuery } from "react-query";
import { getBodyParts } from "../../utils/api/api";

export const useBodyParts = () => {
  return useQuery("bodyparts", getBodyParts, {
    enabled: false,
  });
};
