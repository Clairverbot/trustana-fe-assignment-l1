import React from "react";

type Props = {
  children: string;
};
export default function CardTitle({ children }: Props) {
  return <h6 className="card__body__title">{children}</h6>;
}
