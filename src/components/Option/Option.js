import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import determineWin from "./determineWin";
import "./Option.css";

export default function Option({ image, alt, optionFunction }) {
  const {
    setOption,
    setRandomNumber,
    setAnimation,
    option,
    randomNumber,
    setDisplayText,
  } = useContext(AppContext);

  useEffect(() => {
    const win = determineWin(option, randomNumber);
    setDisplayText(win);
  }, [option, randomNumber, setDisplayText]);

  const makeMove = () => {
    const generateRandomNumber = Math.ceil(Math.random() * 3);
    setAnimation(true);
    setTimeout(() => {
      setRandomNumber(generateRandomNumber);
      optionFunction();
      setAnimation(false);
    }, 3000);
  };

  return (
    <div
      className="icon-box"
      onClick={() => {
        makeMove();
        setRandomNumber(0);
        setOption(0);
      }}
    >
      <img src={image} className="image" alt={alt} />
    </div>
  );
}
