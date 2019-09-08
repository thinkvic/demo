const express = require('express'),
      app = express(),
      server = require('http').createServer(app);
      io = require('socket.io')(server);

let timerId = null,
    sockets = new Set();
    // You intend to add each item only once. Sets never allow duplicates.
    // You don’t care about the order of the items in the set.
    // You don’t need to use APIs that require arrays.
    // You’re storing Hashable types, either your own or one of Swift’s built-in types likes strings and integers. Sets use hash values for fast look up of items.


//This example emits to individual sockets (track by sockets Set above).
//Could also add sockets to a "room" as well using socket.join('roomId')
//https://socket.io/docs/server-api/#socket-join-room-callback

app.use(express.static(__dirname + '/dist')); 

io.on('connection', socket => {

  sockets.add(socket);
  console.log(`Socket ${socket.id} added`);

  if (!timerId) {
    startTimer();
  }

  socket.on('clientdata', data => {
    console.log("lalala",data);
  });

  // cannot use disconnect has to be discon
  socket.on('discon', (data) => {
    console.log('in server', data);
    
    console.log(`Deleting socket: ${socket.id}`);
    sockets.delete(socket);
    console.log(`Remaining sockets: ${sockets.size}`);  //set has a built-in size prop
  });

});

function startTimer() {
  //Simulate stock data received by the server that needs 
  //to be pushed to clients
  timerId = setInterval(() => {

    // When sockets # is zero, it stops pushing data (clear interval)
    if (!sockets.size) {
      clearInterval(timerId);
      timerId = null;
      console.log(`Timer stopped`);
    }
    let value = ((Math.random() * 50) + 1).toFixed(2);
    //See comment above about using a "room" to emit to an entire
    //group of sockets if appropriate for your scenario
    //This example tracks each socket and emits to each one


    // Use it to loop over iterable objects (Arrays, strings, Maps, Sets, etc.; see Chap. “Iterables and iterators”):
    for (const s of sockets) {
      console.log(`Emitting value: ${value}`);
      s.emit('data', { data: value });
    }

  }, 2000);

  console.log('timer id', timerId);
  
}

server.listen(8080);
console.log('Visit http://localhost:8080 in your browser');
