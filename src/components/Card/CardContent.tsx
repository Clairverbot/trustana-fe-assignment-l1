import React from "react";

type Props = {
  children: string;
};
export default function CardContent({ children }: Props) {
  return <div className="body--small card__body__info">{children}</div>;
}
