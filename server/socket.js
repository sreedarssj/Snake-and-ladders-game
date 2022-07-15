const { Server, Socket } = require("socket.io");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });
  //   console.log(io);

  io.on("connection", (socket) => {
    console.log(socket.id);


    socket.on ("update_game", (data) => {
      const socketRooms = Array.from(socket.rooms.values()).filter(
        (r) => r !== socket.id
      );

      const gameRoom = socketRooms && socketRooms[0];

      socket.to(gameRoom).emit("on_game_update", data);

    });

    socket.on("joined_room", (data) => {
      //   console.log(data);
      const connectSockets = io.sockets.adapter.rooms.get(data.roomId);
      const socketRooms = Array.from(socket.rooms.values()).filter(
        (r) => r !== socket.id
      );
      if (
        socketRooms.length > 0 ||
        (connectSockets && connectSockets.size === 2)
      ) {
        socket.emit("room_joined", false);
      } else {
        socket.join(data.roomId);
        socket.emit("room_joined", true);

        if (connectSockets && connectSockets.size == 2) {
          socket.emit("start_game", { start: true, player_number: 1 });
          socket
            .to(data.roomId)
            .emit("start_game", { start: false, player_number: 2 });
        }
      }
    });
  });
};
