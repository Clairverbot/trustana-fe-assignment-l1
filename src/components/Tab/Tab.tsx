import React, { useState } from "react";
import logo from "../../assets/images/logo/color-dark.svg";
type Props = {
  children?: React.ReactNode;
};

export default function Tab({ children }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <nav>
      <ul className="tab">
        <button
          className={`hamburger ${isCollapsed ? "collapsed" : ""}`}
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div className="hamburger__container">
            <div className="hamburger__top"></div>
            <div className="hamburger__mid"></div>
            <div className="hamburger__bottom"></div>
          </div>
        </button>

        <div className={isCollapsed?"collapse":"tab"} id="mobile-menu">
          {children}
        </div>
      </ul>
      <ul className="tab" id="desktop-menu">
        {children}
      </ul>
    </nav>
  );
}
