import { Link } from "react-router-dom";

import { Exercise } from "../../utils/types";

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <Link
      className="w-[400px] h-[445px] bg-white border-t-4 border-primary flex justify-between flex-col pb-3 scale-100 ease-in-out duration-300 hover:scale-110"
      to={`/exercise/${exercise.id}`}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="h-80"
      />
      <div className="flex flex-col gap-4 pl-4">
        <div className="flex gap-4 ">
          <button className="text-white bg-[#ffa9a9] text-sm rounded-2xl capitalize px-4 py-2 hover:opacity-0">
            {exercise.bodyPart}
          </button>
          <button className="text-white bg-[#dcc757] text-sm rounded-2xl px-4 py-2 capitalize hover:opacity-0">
            {exercise.target}
          </button>
        </div>
        <h6 className="font-bold text-black capitalize"> {exercise.name}</h6>
      </div>
    </Link>
  );
};

export default ExerciseCard;
