import Dice from "../Dice/Dice";

const GameSpace = (props) => {
  //   console.log(props.BoardCell);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Dice diceValue={props.diceValue} />
        <button
          className="btn btn-info mx-2 my-3"
          onClick={() => props.setDiceValue(props.diceRoll())}
        >
          Roll
        </button>
      </div>
      <div>
        {props.BoardCell.map((BoardRow, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              {BoardRow.map((Cell) => {
                return (
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid #ffc107",
                      borderRadius: "4px",
                      fontSize: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "#198754",
                      fontWeight: "700",
                    }}
                    key={Cell.id}
                  >
                    <div>
                      {Cell.id}
                      {Cell.move ? (
                        <span style={{ color: "#dc3545" }}>
                          -&gt;{Cell.move}
                        </span>
                      ) : null}
                      {Cell.player.length !== 0 ? (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "black",
                          }}
                        ></div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameSpace;
