'use strict';

const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {

   socket.on('message', (message) => {
      socket.emit('messageReceived');
   });

})

server.listen(3000, () => {
   console.log('server listening on port 3000');
})
