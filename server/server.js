const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', function (message) {
    io.emit('newMessage', {
      text: message.text,
      from: message.from,
      createdAt: new Date().getTime(),
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
