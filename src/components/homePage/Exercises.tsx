import { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";

import { useFilteredExercisesStore } from "../../store";
import { useExercises, useExercise } from "../../utils/hooks";
import { Exercise } from "../../utils/types";
import ExerciseCard from "../exercises/ExerciseCard";

const Exercises = () => {
  const [currentItems, setCurrentItems] = useState<Exercise[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const pageViewRef = useRef<HTMLDivElement>(null);
  const { data: exercises, isLoading: exercisesLoading } = useExercises();
  const { data: exercise, isLoading: exerciseLoading } = useExercise();
  const inputData = useFilteredExercisesStore((state) => state.exercise);
  const itemsPerPage = 9;

  const searchedExercises = exercises?.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(inputData) ||
      exercise.target.toLowerCase().includes(inputData) ||
      exercise.equipment.toLowerCase().includes(inputData) ||
      exercise.bodyPart.toLowerCase().includes(inputData)
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchedExercises?.slice(itemOffset, endOffset)!);
    setPageCount(Math.ceil(searchedExercises?.length! / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchedExercises]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % searchedExercises?.length!;

    setItemOffset(newOffset);
    pageViewRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={pageViewRef} className="p-10 space-y-10" id="exercises">
      <h4 className="font-bold">Showing Results</h4>
      <div className="flex flex-wrap justify-center gap-10">
        {currentItems?.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        className="flex items-center justify-center text-xl text-red-500 capitalize"
      />
    </div>
  );
};

export default Exercises;
