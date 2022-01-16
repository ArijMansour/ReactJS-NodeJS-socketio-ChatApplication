const express =require('express');
const socketio=require('socket.io');
const http = require('http');
const router = require('./router');
const app=express () ;

// socket.io setup 
const PORT =process.env.PORT || 5000
const server= http.createServer(app);
const io = socketio(server); 
// integrate socket io 

//socket connection 
io.on('connection', (socket)=> {
 console.log('we have a new connection!!') ;
 socket.on('disconnect',() =>{
     console.log('user had left !! ')
 })
});
app.use(router) ;
server.listen(PORT, () => console.log(`server has started on port ${PORT}`)); // altgr 7 

 