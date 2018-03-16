var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
const Bundler = require('parcel-bundler')

const bundler = new Bundler('./index.html')

/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/

app.use(bundler.middleware())


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
