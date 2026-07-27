import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Domů</NavLink>
      <NavLink to="allcharacters">Postavy</NavLink>
    </nav>
  );
};

export default Navbar;
