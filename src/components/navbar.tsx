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
        <Link to="/projects">Projects</Link>
        <a
          href="https://drive.google.com/file/d/1kj6YSn3mUeUHQAbJe9HT0kcMoXCwWZ6R/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
