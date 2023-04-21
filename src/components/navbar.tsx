import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [collapseNavBar, setCollapseNavBar] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 80) {
      setCollapseNavBar(true);
    } else {
      setCollapseNavBar(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);

  return (
    <div className={collapseNavBar ? "navbar sticky" : "navbar"}>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
