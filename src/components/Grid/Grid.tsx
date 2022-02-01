import React from "react";
type Props = {
  children: React.ReactNode;
  cols?: number;
};
export default function Grid({ children, cols = 3 }: Props) {
  return <div className={`grid grid--col-${cols}`}>{children}</div>;
}
