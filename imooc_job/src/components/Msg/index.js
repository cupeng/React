import React from 'react';
import {connect} from 'react-redux';
import {List,Badge} from 'antd-mobile';

@connect(
	state=>state
)

export default class Msg extends React.Component {
	getLast(arr){
		return arr[arr.length-1];
	}
	render(){
		const Item = List.Item;
		const Brief = Item.Brief;
		const userid = this.props.user._id;
		const userInfo = this.props.chat.users;
		const msgGroup = {};
		this.props.chat.chatmsg.forEach(v=>{
			msgGroup[v.chatid] = msgGroup[v.chatid] || []
			msgGroup[v.chatid].push(v);
		});
		const chatList = Object.values(msgGroup).sort((a,b)=>{
			console.log()
			const a_last = this.getLast(a).create_time;
			const b_last = this.getLast(b).create_time;
			return b_last-a_last;
		});

		return (<div>
					
						{chatList.map(v=>{
							const lastItem = this.getLast(v);
							console.log(this.props.user);
							const targetId = v[0].from==userid?v[0].to:v[0].from;
							const unreadNum = v.filter(v=>!v.read&&v.to==userid).length;
							console.log(targetId);
							return (<List key={lastItem._id}>
								<Item onClick={()=>{
										this.props.history.push(`/chat/${targetId}`)
								}} extra={<Badge text={unreadNum}></Badge>} thumb={require(`../AvatarSelector/images/${userInfo[targetId].avatar}.png`)}>
								{lastItem.content}
								<Brief>{userInfo[targetId].name}</Brief>
							</Item></List>)
						})}
					
			</div>)
	}
}