const socketIO = require('socket.io');
const socket = {};

function connect(server) {
     socket.io = socketIO(server, {
          cors: {
               origin: '*',
          }

     })
}
module.exports = {
     connect,
     socket,
}
