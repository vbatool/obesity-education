import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import DartmouthHealthLogo from "../../images/NavigationBarImages/DartmouthHealthLogo.png";
function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBarLeft">
        <img
          className="DartmouthHealthLogo"
          src={DartmouthHealthLogo}
          alt="Dartmouth Health Logo"
        ></img>
        <li>
          <Link className="NavigationBarLinkItem">Dartmouth Health</Link>
        </li>
      </div>
      <div className="NavigationBarRight">
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
