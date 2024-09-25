const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const route = require('./route')

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: "*",
      methods: ["GET", "POST"]
   }
})

app.use(cors({ origin: '*'}));
app.use(route);
server.listen(5500, () => {
   console.log("Server running");
})