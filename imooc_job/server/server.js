const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');
const models = require('./model');
const Chat = models.getModel("chat");
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection',(socket)=>{
	socket.on('sendmsg',(data)=>{
		const {from,to,msg} = data;
		const chatid = [from,to].sort().join('_');
		Chat.create({chatid,from,to,content:msg},(err,doc)=>{
			io.emit('recvmsg',Object.assign({},doc._doc))
		})
	})
})

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user",userRouter);

server.listen(9093,function(){
	console.log("Node app start at port 9093");
});