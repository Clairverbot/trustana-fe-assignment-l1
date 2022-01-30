import React from "react";

type Props = {
  title: string;
  info: string[];
};
export default function CardBody({ title, info }: Props) {
  return (
    <div className="card__body">
      <h6 className="card__body__title">{title}</h6>
      <div className="body--small card__body__info">MOQ 20 units</div>
      <div className="body--small card__body__info">SGD 4.50 /carton</div>
    </div>
  );
}
