import React from "react";
type Props = {
  children?: React.ReactNode;
};
export default function Header({ children }: Props) {
  return <div className="header">{children}</div>;
}
