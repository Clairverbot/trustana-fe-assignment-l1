import React from "react";

type Props = {
  src?: string;
};
export default function CardImage({ src }: Props) {
  return (
    <div className="card__image">
      {src ? <img src={src} alt={src} /> : <p>🚀</p>}
    </div>
  );
}
