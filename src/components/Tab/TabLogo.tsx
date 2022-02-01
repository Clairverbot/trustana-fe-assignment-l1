import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export default function TabLink({ children }: IProps) {
  return <div className=" tab__right">{children}</div>;
}
