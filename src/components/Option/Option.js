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

  const setValues = () => {
    const generateRandomNumber = Math.ceil(Math.random() * 3);
    setTimeout(() => {
      setRandomNumber(generateRandomNumber);
      optionFunction();
    }, 3000);
  };

  const playAnimation = async () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  };

  return (
    <div
      className="icon-box"
      onClick={() => {
        playAnimation();
        setRandomNumber(0);
        setOption(0);
        setValues();
      }}
    >
      <img src={image} className="image" alt={alt} />
    </div>
  );
}
