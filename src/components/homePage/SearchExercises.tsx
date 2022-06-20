import { useRef } from "react";
import { useBodyParts } from "../../utils/hooks/hooks";

const SearchExercises = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data, isLoading, error, refetch } = useBodyParts();

  const handleSearch = async () => {
    if (inputRef.current?.value) {
      //refetch();
    }
  };

  return (
    <div className="px-10 mx-auto ">
      <div className="flex flex-col items-center justify-center gap-6">
        <h6 className="font-bold">Awesome Exercises You Should Know</h6>
        <div className="flex w-full">
          <input
            type="text "
            className="w-full px-2 py-4 border rounded border-gray"
            placeholder="Search Exercises"
            ref={inputRef}
          />
          <button
            className="px-8 text-xl text-white rounded-md bg-primary"
            type="button"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
