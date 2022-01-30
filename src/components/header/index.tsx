import React from "react";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
export default function Header({ children }: Props) {
  return <div className="header">{children}</div>;
}
