import React from "react";
import logo from "../../assets/images/logo/color-dark.svg";
type Props = {
  children?: React.ReactNode;
};
export default function Tab({children}:Props) {
  return (
    <div className="tab">
      {children}
    </div>
  );
}
