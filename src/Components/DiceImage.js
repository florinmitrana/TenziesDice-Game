import React from "react";
import one from "../images/dice-six-faces-one.png";
import two from "../images/dice-six-faces-two.png";
import three from "../images/dice-six-faces-three.png";
import four from "../images/dice-six-faces-four.png";
import five from "../images/dice-six-faces-five.png";
import six from "../images/dice-six-faces-six.png";
import Dice from "./Dice";

const DiceImage = ({ roll,isHeld, holdDice }) => {
    switch (roll) {
        case 1:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={one} alt="1" onClick={holdDice} />;
          case 2:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={two} alt="2" onClick={holdDice} />;
          case 3:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={three} alt="3" onClick={holdDice} />;
          case 4:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={four} alt="4" onClick={holdDice} />;
          case 5:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={five} alt="5" onClick={holdDice} />;
          case 6:
            return <img className={`dice-image ${isHeld ? 'held' : ''}`} src={six} alt="6" onClick={holdDice} />;
          default:
        return null;
    }
  };

  export default DiceImage;