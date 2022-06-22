import Hero from "../components/homePage/Hero";
import Exercises from "../components/homePage/Exercises";
import SearchExercises from "../components/homePage/SearchExercises";

const Home = () => {
  return (
    <div id="home" className="space-y-32">
      <Hero />
      <SearchExercises />
      <Exercises />
    </div>
  );
};

export default Home;
