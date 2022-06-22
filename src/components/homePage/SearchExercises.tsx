import { useRef } from "react";

import { useFilteredExercisesStore } from "../../store";

const SearchExercises = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setInput = useFilteredExercisesStore((state) => state.setExercise);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      setInput(inputRef.current?.value);
    }
  };

  return (
    <form className="px-10 mx-auto space-y-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <h4 className="font-bold">Awesome Exercises You Should Know</h4>
        <div className="flex w-full">
          <input
            type="text "
            className="w-full px-2 py-4 border rounded border-gray"
            placeholder="Search Exercises"
            ref={inputRef}
          />
          <button
            className="px-8 text-xl text-white bg-red-500 rounded-md"
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchExercises;
