import React from "react";
import Card from "./Card";

export default function CardSlider({ title, data }) {
  return (
    <div key={title}>
      {data?.map((el) => {
        return <Card cardObject={el} key={el?.id} />;
      })}
    </div>
  );
}
