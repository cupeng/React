const express = require("express");
const Router = express.Router();
const models = require('./model');
const User = models.getModel("user");
const utils = require("utility");
const Chat = models.getModel("chat");
const _filter = {'pwd':0,'__v':0};
Router.get('/list',(req,res)=>{
	const {type} = req.query;
	User.find({type},(err,doc)=>{
		return res.json({code:0,data:doc});
	})
})

Router.get('/getmsglist',function(req,res){
	const user = req.cookies.userid

	User.find({},function(e,userdoc){
		let users = {}
		userdoc.forEach(v=>{
			users[v._id] = {name:v.user, avatar:v.avatar}
		})
		Chat.find({'$or':[{to:user}]},function(err,doc){
			if (!err) {
				return res.json({code:0,msgs:doc, users:users})
			}
		})

	})
	// {'$or':[{from:user,to:user}]}

})

Router.post('/readmsg', (req,res)=>{
	const userid = req.cookies.userid;
	const {from} = req.body;
	Chat.update(
		{from,to:userid},
		{'$set':{read:true}},
		{'multi':true},
		function(err,doc){
		if (!err) {
			return res.json({code:0,num:doc.nModified})
		}
		return res.json({code:1,msg:'修改失败'})
	})
})

Router.post('/update',(req,res)=>{
	const {userid} = req.cookies;
	const body = req.body;
	if(!userid){
		return json.dumps({code:1});
	}
	User.findByIdAndUpdate(userid,body,(err,doc)=>{
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data});
	})
})

Router.post('/register',(req,res)=>{
	const {user,pwd,type} = req.body;
	User.findOne({user},(err,doc)=>{
		if(doc){
			return res.json({code:1,msg:'用户名已存在'});
		}
		User.create({user,pwd:md5(pwd),type},(e,d)=>{
			if(e){
				return res.json({code:1,msg:'后端出错'});
			}
			res.cookie('userid',d._id);
			return res.json({code:0,msg:'注册成功'});
		})
	})
})

Router.post('/login',(req,res)=>{
 	const {user,pwd} = req.body;
 	
	User.findOne({user,pwd:md5(pwd)},_filter,(err,doc)=>{
		if(!doc){
			return res.json({code:1,msg:'用户名或密码错误'})
		}
		res.cookie('userid',doc._id);
		return res.json({code:0,data:doc});
	})
})

Router.get("/info",(req,res)=>{ 
	const {userid} = req.cookies;
	if(!userid){
		return res.json({code:1});
	}
	User.findOne({_id:userid},_filter,(err,doc)=>{
		if(err){
			return res.json({code:1,msg:'后端出错了'});
		}
		if(doc){
			return res.json({code:0,data:doc});
		}
	})
})

function md5(pwd){
	const salt = 'djskaldjsakl@jklkdsa;l..';
	return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;