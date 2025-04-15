import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import DartmouthHealthLogo from "../../images/NavigationBarImages/DartmouthHealthLogo.png";

function NavigationBar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth > 1250) {
        setIsClicked(false);
      }
    };

    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <nav className="NavigationBar">
      <div className="NavigationBarLeft">
        <div className="LogoContainer">
          <img
            className="DartmouthHealthLogo"
            src={DartmouthHealthLogo}
            alt="Dartmouth Health Logo"
          ></img>
          <li>
            <Link className="NavigationBarLinkItem">Dartmouth Health</Link>
          </li>
        </div>

        <div className="NavigationBarMenuIcon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`NavigationBarRight ${isClicked ? "Clicked" : ""}`}>
        <ul className="NavigationBarLinkList">
          <li>
            <Link className="NavigationBarLinkItem">Health Topics</Link>
          </li>
          <li>
            <Link className="NavigationBarLinkItem">Patient Stories</Link>
          </li>
          <li>
            <Link className="NavigationBarLinkItem">Resources</Link>
          </li>
          <li>
            <Link className="NavigationBarLinkItem">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
