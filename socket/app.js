/**
 * Created by itnew on 14-1-13.
 */
var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

server.listen(3333);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    console.log('conn');

    socket.on('news',function(data){
        socket.emit('message',data);
        socket.broadcast.emit('all',data);
        console.log('broadcast:'+data);
    });
//    socket.emit('news', { hello: 'world' });
//    socket.on('my other event', function (data) {
//        console.log(data);
//    });
});