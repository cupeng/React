const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/imooc_job";


mongoose.connect(DB_URL,function(e){
	if(e){
		console.log('mongo connect fail')
	}else{
		console.log("mongo connect success");	
	}
	
});


const models = {
	user:{
		//牛人
		'user':{'type':String,require:true},
		'pwd':{'type':String,require:true},
		'type':{'type':String,require:true},
		'avatar':{
			'type':String
		},
		'desc':{'type':String},
		'title':{'type':String},
		//boss
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{

	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
	getModel:function(name){
		return mongoose.model(name);
	}
}