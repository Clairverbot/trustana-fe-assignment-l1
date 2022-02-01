import React from "react";
type Props = {
  children?: React.ReactNode;
};
export default function HeaderSubtitle({ children }: Props) {
  return <div className="body--small header--subtitle">{children}</div>;
}
