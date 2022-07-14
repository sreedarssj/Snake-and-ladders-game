import "./Room.css";

const Room = (props) => {
  // console.log(props);
  return (
    <div className="outer_div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // props.setJoinedRoom(true);
          if (props.socket && props.roomId && props.roomId.trim() !== "") {
            props.socket.emit("joined_room", { roomId: props.roomId });
            props.socket.on("room_joined", (data) => {
              if (!data) {
                //throw error
                alert("You can't join this room");
              }
              console.log(data);
              props.setJoinedRoom(data);
            });
          }
        }}
      >
        <h4 className="text-center text-primary">Room ID</h4>
        <input
          className="my-3 form-control"
          onChange={(e) => {
            props.setRoomId(e.target.value);
          }}
          required
          value={props.roomId}
        />
        <button className="btn btn-primary">Join Room</button>
      </form>
    </div>
  );
};

export default Room;
