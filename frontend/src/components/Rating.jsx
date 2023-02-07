import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function Rating() {
  const [rating, setRating] = useState(0);
  const [fillStarIndex, setFillStarIndex] = useState(rating - 1);
  useEffect(() => {
    setFillStarIndex[rating - 1];
  }, [rating]);
  const handleMouseEnter = (index) => {
    if (index > rating - 1) {
      setFillStarIndex(index);
    }
  };
  const handleMouseLeave = () => {
    setFillStarIndex(rating - 1);
  };
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="flex">
      {stars.map((star, i) => {
        return (
          <AiFillStar
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => {
              handleMouseEnter(i);
            }}
            onMouseLeave={handleMouseLeave}
            key={i}
            fill={i <= fillStarIndex ? "yellow" : "gray"}
            className="cursor-pointer"
          />
        );
      })}
    </div>
  );
}

export default Rating;
