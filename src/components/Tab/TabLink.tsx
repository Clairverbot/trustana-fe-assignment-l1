import React from "react";

interface IProps {
  active?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

export default function TabLink({
  active = false,
  children,
  onClick,
}: IProps) {
  return (
    <div
      className={`tab__link body--small ${active ? "tab__link--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
