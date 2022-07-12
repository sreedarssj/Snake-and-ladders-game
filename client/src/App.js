import "bootstrap/dist/css/bootstrap.min.css";

//Importing hooks
import { useState } from "react";

//Importing components
import Room from "./Room/Room";
import GameSpace from "./GameSpace/GameSpace";
import { BoardCell } from "./shared/data";

function App() {
  const [roomId, setRoomId] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [diceValue, setDiceValue] = useState(0);

  const diceRoll = () => Math.floor(Math.random() * 6) + 1;

  return (
    <>
      {joinedRoom ? (
        <GameSpace
          BoardCell={BoardCell}
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          diceRoll={diceRoll}
        />
      ) : (
        <Room
          roomId={roomId}
          setJoinedRoom={setJoinedRoom}
          setRoomId={setRoomId}
        />
      )}
    </>
  );
}

export default App;
