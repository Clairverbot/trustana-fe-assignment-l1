import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function CardBody({ children }: Props) {
  return (
    <div className="card__body">
      {children}
    </div>
  );
}
