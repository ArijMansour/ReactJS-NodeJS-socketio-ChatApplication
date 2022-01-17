const express =require('express');
const socketio=require('socket.io');
const http = require('http');
const router = require('./router');
const app=express () ;
const {addUser,removeUser,getUsersInRoom,getUser} = require ('./users.js') ;
// socket.io setup 
const PORT =process.env.PORT || 5000
const server= http.createServer(app);
const io = socketio(server); 
// integrate socket io 

//socket connection 
io.on('connection', (socket)=> {
 console.log('we have a new connection!!') ;
 socket.on('join', ({name,room}, callback)=>{

 const {error,  user}=addUser({id:socket.id,name,room}) ; 
 if(error) return callback(error); 

 socket.emit('message',{user:'admin',text:`${user.name},Welcome to the room ${user.room}`})
 socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name},has joind`})

 socket.join(user.room) ;

 callback() ; 
    /* console.log(name,room) ;
     const error= true ; 
if(error){
    callback({error:'error'}); 
}*/
    //Error handling
 })
 socket.on('sendMessage',(message,callback)=>{
     const user= getUser(socket.id);
     io.to(user.room).emit('message', {user:user.name,text:message}) ; 
     callback() ;

 })


 socket.on('disconnect',() =>{
     console.log('user had left !! ')
 })
});
app.use(router) ;
server.listen(PORT, () => console.log(`server has started on port ${PORT}`)); // altgr 7 

 