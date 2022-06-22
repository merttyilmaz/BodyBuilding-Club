import { useQuery } from "react-query";
import { getExercise, getExercises } from "../api";
import { Exercise } from "../types";

export const useExercise = (bodyPart: string) => {
  return useQuery<Exercise[]>("exercise", getExercise, {
    enabled: false,
  });
};

export const useExercises = () => {
  return useQuery<Exercise[]>("allExercises", getExercises);
};
