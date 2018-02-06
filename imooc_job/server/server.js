const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection',(socket)=>{
	socket.on('sendmsg',(data)=>{
		io.emit('recvmsg',data);
	})
	
})

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user",userRouter);

server.listen(9093,function(){
	console.log("Node app start at port 9093");
});