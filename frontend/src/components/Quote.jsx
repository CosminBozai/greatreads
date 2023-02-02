import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";

const transitionInterval = 10000;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Quote() {
  const [quoteData, setQuoteData] = useState({});

  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    // Makes the transition restart everytime the element that uses the hook rerenders
    reset: true,
    config: { duration: transitionInterval },
  });

  useEffect(() => {
    const getRandomQuote = async () => {
      const res = await fetch(
        `https://dummyjson.com/users/${randomIntFromInterval(1, 100)}`
      );
      const { firstName, userAgent, image } = await res.json();
      setQuoteData({ firstName, userAgent, image });
    };
    getRandomQuote();
    const getInterval = setInterval(getRandomQuote, transitionInterval);
    // Stop the calls when element unmounts
    return () => clearInterval(getInterval);
  }, []);
  return (
    <div>
      <h2 className="mb-4 text-xl font-medium">Quotes</h2>
      <animated.div
        className="flex"
        style={{
          opacity: x.to({
            range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            output: [0, 0.5, 1, 1, 1, 1, 1, 1, 1, 0.5, 0],
          }),
        }}
      >
        <img
          src={quoteData.image}
          alt="author of quote"
          className="mr-2 h-16 w-14"
        />
        <div>
          <p className="text-gray-900">{quoteData.userAgent}</p>
          <p className="font-semibold text-gray-900">- {quoteData.firstName}</p>
        </div>
      </animated.div>
    </div>
  );
}

export default Quote;
