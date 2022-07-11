import React, { useContext } from "react";
import "./Hand.css";
import fist from "../../images/right-fist.png";
import rock from "../../images/rock-fist.png";
import paper from "../../images/paper-hand.png";
import scissors from "../../images/scissors-hand.png";
import { AppContext } from "../../App";

export default function Hand({ option, rightHand }) {
  const { animation } = useContext(AppContext);

  let classNameOther = "img-hand";
  if (rightHand) {
    classNameOther += " right-hand-rotate";
  } else {
    classNameOther += " left-hand-rotate";
  }

  if (option === 1) {
    classNameOther += " rock";
  }

  return (
    <div className="hand-box">
      {option === 0 && (
        <img
          src={fist}
          alt="fist"
          className={`img-hand ${rightHand ? "right-hand" : ""} ${
            animation && rightHand ? "animation-right" : ""
          } ${animation && !rightHand ? "animation-left" : ""}`}
        />
      )}
      {option === 1 && <img src={rock} alt="rock" className={classNameOther} />}
      {option === 2 && (
        <img src={paper} alt="paper" className={classNameOther} />
      )}
      {option === 3 && (
        <img src={scissors} alt="scissors" className={classNameOther} />
      )}
    </div>
  );
}
