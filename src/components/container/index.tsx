import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
export default function Container({children}:Props) {
  return <div className="container">{children}</div>;
}
