import { useState } from "react";

import Hero from "../components/homePage/Hero";
import Exercises from "../components/homePage/Exercises";
import SearchExercises from "../components/homePage/SearchExercises";

const Home = () => {
  const [state, setState] = useState("");
  return (
    <div className="space-y-32">
      <Hero />
      <SearchExercises />
      <Exercises />
    </div>
  );
};

export default Home;
