import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="userIcon" src="../../../images/UserIcon.svg" alt="UserIcon" />
      <ul>
        <li className="navList">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/services">SERVICES</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/gallery">GALLERY</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
      </ul>
      <img className="barMenu" src="../../../images/burgerMenu.svg" alt="" />
      <div className="socialBox">
        <Link to="https://www.linkedin.com/in/alyvofficial/" target="_blank">
          <img src="../../../images/LinkedIn.svg" alt="LinkedIn Icon" />
        </Link>
        <Link to="https://www.instagram.com/alyvdesign/" target="_blank">
          <img src="../../../images/Instagram.svg" alt="Instagram Icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
