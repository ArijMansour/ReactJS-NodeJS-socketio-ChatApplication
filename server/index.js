const express =require('express');
const socketio=require('socket.io');
const http = require('http');

const app=express () ;

// socket.io setup 
const PORT =process.env.PORT || 5000
const server= http.createServer(app);
const io = socketio(server);
server.listen(PORT, () => console.log(`server has started on port ${PORT}`)); // altgr 7 

