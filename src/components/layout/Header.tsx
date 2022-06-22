import { Link } from "react-scroll";

const AppLogo = require("../../assets/images/Logo.png");

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-lg p-10 ">
      <img src={AppLogo} alt="logo" className="w-14 h-14" />
      <div className="flex gap-6 text-xl font-medium text-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={25}
          duration={500}
          className="hover:underline underline-offset-4 decoration-red-500 hover:text-black decoration-4 "
        >
          Home
        </Link>
        <Link
          to="exercises"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline underline-offset-4 decoration-red-500 hover:text-black decoration-4"
        >
          Exercises
        </Link>
      </div>
    </div>
  );
};

export default Header;
