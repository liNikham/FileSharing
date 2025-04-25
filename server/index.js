// server/index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`);
  // we’ll handle signaling here later
});

server.listen(5000, () => {
  console.log('Signaling server running on http://localhost:5000');
});
