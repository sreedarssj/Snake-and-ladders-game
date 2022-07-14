import "bootstrap/dist/css/bootstrap.min.css";

//Importing hooks
import { useState, useEffect } from "react";

//Importing components
import Room from "./Room/Room";
import GameSpace from "./GameSpace/GameSpace";
import { BoardCell } from "./shared/data";

//Importing sockets using socket.io
const { io } = require("socket.io-client");
const socket = io("http://localhost:9000/");

function App() {
  const [roomId, setRoomId] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [diceValue, setDiceValue] = useState(0);

  const [playerNumber, setPlayerNumber] = useState("");
  const [userActive, setUserActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const diceRoll = () => Math.floor(Math.random() * 6) + 1;

  const connect = () => {
    socket.on("connect", () => {
      console.log("we are connected to the server!!");
    });
  };

  const handleGameStart = () => {
    if (socket) {
      socket.on("start_game", (data) => {
        console.log(data);
        setPlayerNumber(data.player_number);
        setGameStarted(true);
        setUserActive(data.start);
      });
    }
  };

  useEffect(() => {
    connect();
    handleGameStart();
  }, []);

  return (
    <>
      {joinedRoom ? (
        <GameSpace
          BoardCell={BoardCell}
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          diceRoll={diceRoll}
          playerNumber={playerNumber}
          gameStarted={gameStarted}
          userActive={userActive}
        />
      ) : (
        <Room
          roomId={roomId}
          setJoinedRoom={setJoinedRoom}
          setRoomId={setRoomId}
          socket={socket}
        />
      )}
    </>
  );
}

export default App;
