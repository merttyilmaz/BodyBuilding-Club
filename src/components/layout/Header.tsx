import { Link } from "react-router-dom";

const AppLogo = require("../../assets/images/Logo.png");

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-lg p-10 ">
      <img src={AppLogo} alt="logo" className="w-14 h-14" />
      <div className="flex gap-6 text-lg font-medium text-center">
        <Link
          to="/"
          className="hover:underline underline-offset-4 decoration-primary decoration-4 "
        >
          Home
        </Link>
        <Link
          to="/exercise"
          className="hover:underline underline-offset-4 decoration-primary decoration-4"
        >
          Exercises
        </Link>
      </div>
    </div>
  );
};

export default Header;
