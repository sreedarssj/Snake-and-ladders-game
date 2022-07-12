import Dice1 from "../images/1.png";
import Dice2 from "../images/2.png";
import Dice3 from "../images/3.png";
import Dice4 from "../images/4.png";
import Dice5 from "../images/5.png";
import Dice6 from "../images/6.png";

const Dice = (props) => {
  const dieValue = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  return (
    <div>
      {props.diceValue > 0 ? (
        <img
          style={{ width: "40px", height: "40px" }}
          src={dieValue[props.diceValue - 1]}
        />
      ) : null}
    </div>
  );
};

export default Dice;
