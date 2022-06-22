import create from "zustand";

interface FilteredExerciseState {
  exercise: string;
  setExercise: (part: string) => void;
}

export const useFilteredExercisesStore = create<FilteredExerciseState>(
  (set) => ({
    exercise: "",
    setExercise: (exercise: string) => set(() => ({ exercise: exercise })),
  })
);
