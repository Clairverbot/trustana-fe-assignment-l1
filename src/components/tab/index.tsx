import React from "react";
import logo from "../../assets/images/logo/color-dark.svg";

export default function Tab() {
  return (
    <div className="tab">
      <div className="tab__links tab__links--active body--small">Korean products</div>
      <div className="tab__links body--small">Chinese products</div>
      <div className="tab__links body--small">Japanese products</div>
      <div className=" tab__right">
        <img src={logo} alt="Trustana" />
      </div>
    </div>
  );
}
