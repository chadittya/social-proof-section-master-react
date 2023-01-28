import React from "react";
import StarImage from "../assets/images/icon-star.svg";

export default function Stars(props) {
  const getRateStar = (num) => {
    const array = [];
    for (let i = 1; i <= num; i++) {
      array.push(<img src={StarImage} alt="rating stars" />);
    }
    return array;
  };

  return <div className="flex flex-row gap-2">{getRateStar(props.qty)}</div>;
}
