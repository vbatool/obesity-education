import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import DartmouthHealthLogo from "../../images/NavigationBarImages/DartmouthHealthLogo.png";

function NavigationBar() {
  const [menuOpen, setmenuOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth > 1250) {
        setmenuOpen(false);
      }
    };

    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <nav className="NavigationBar">
      <div className="NavigationBarContent">
        <div className="NavigationBarLeft">
          <div className="LogoContainer">
            <Link to="/" className="NavigationBarLinkItem">
              <img
                className="DartmouthHealthLogo"
                src={DartmouthHealthLogo}
                alt="Dartmouth Health Logo"
              ></img>
              <span> Dartmouth Health</span>
            </Link>
          </div>

          <div className="NavigationBarMenuIcon" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <div className={`NavigationBarRight ${menuOpen ? "Clicked" : ""}`}>
          <ul className="NavigationBarLinkList">
            <li className="NavigationBarLinkDropdown">
              <div className="DropdownToggle" onClick={toggleDropdown}>
                <span className="NavigationBarLinkItem Health">
                  Health Topics
                </span>
                <i
                  className={`DropdownArrow ${dropdownOpen ? "Clicked" : ""}`}
                ></i>
              </div>

              {dropdownOpen && (
                <div className="DropdownMenu">
                  <Link
                    to={"/health-topics/causes-of-obesity"}
                    className="DropdownMenuItem"
                  >
                    Causes of Obesity
                  </Link>
                  <Link
                    to={"/health-topics/challenges-of-weight-loss"}
                    className="DropdownMenuItem"
                  >
                    Challenges of Weight Loss
                  </Link>

                  <Link
                    to={"/health-topics/health-screenings"}
                    className="DropdownMenuItem"
                  >
                    Health Screenings
                  </Link>
                </div>
              )}
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
      </div>
    </nav>
  );
}

export default NavigationBar;
