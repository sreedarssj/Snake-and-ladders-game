import "./Room.css";

const Room = (props) => {
  // console.log(props);
  return (
    <div className="outer_div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setJoinedRoom(true);
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
