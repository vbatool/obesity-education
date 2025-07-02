import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const closeMenu = () => {
    setmenuOpen(false);
    setDropdownOpen(false);
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

  const location = useLocation();

  useEffect(() => {
    setmenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleCloseNavBar = () => {
      setmenuOpen(false);
      setDropdownOpen(false);
    };

    window.addEventListener("closeNavBar", handleCloseNavBar);

    return () => {
      window.removeEventListener("closeNavBar", handleCloseNavBar);
    };
  }, []);

  return (
    <nav className="NavigationBar">
      <div className="NavigationBarContent">
        <div className="NavigationBarLeft">
          <div className="LogoContainer">
            <Link
              to="/dartmouth-health-obesity-education"
              className="NavigationBarLinkItem"
              onClick={closeMenu}
            >
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
                    onClick={closeMenu}
                  >
                    Causes of Obesity
                  </Link>
                  <Link
                    to={"/health-topics/challenges-of-weight-loss"}
                    className="DropdownMenuItem"
                    onClick={closeMenu}
                  >
                    Challenges of Weight Loss
                  </Link>

                  <Link
                    to={"/health-topics/mental-health-and-weight"}
                    className="DropdownMenuItem"
                    onClick={closeMenu}
                  >
                    Mental Health
                  </Link>

                  <Link
                    to={"/health-topics/weight-loss-treatment"}
                    className="DropdownMenuItem"
                    onClick={closeMenu}
                  >
                    Treatment Options
                  </Link>
                  <Link
                    to={"/health-topics/health-screenings"}
                    className="DropdownMenuItem"
                    onClick={closeMenu}
                  >
                    Health Screenings
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link className="NavigationBarLinkItem" to="/patient-stories">
                Patient Stories
              </Link>
            </li>
            <li>
              <Link className="NavigationBarLinkItem" onClick={closeMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link className="NavigationBarLinkItem" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
