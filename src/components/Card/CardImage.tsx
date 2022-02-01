import React from "react";

type Props = {
  src: string;
};
export default function CardImage({src}:Props) {
  return (
    <div className="card__image">
      <img src={require("../../assets/images/products/"+src+".png")} alt={src}/>
    </div>
  );
}
