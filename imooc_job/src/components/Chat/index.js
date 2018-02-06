import React from 'react';
import io from 'socket.io-client';
import {InputItem,List} from 'antd-mobile';
import {connect} from 'react-redux'; 
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux';
const socket = io('ws://localhost:9093');

@connect(
	state=>state,
	{ getMsgList,sendMsg,recvMsg}
)

export default class Chat extends React.Component {
	constructor(props){
		super(props);
		this.state={
			text:'',
			msg:[]
		}
	}
	componentDidMount(){
		this.props.getMsgList();
		this.props.recvMsg();
		// socket.on('recvmsg',(data)=>{
		// 	this.setState({
		// 		msg:[...this.state.msg,data.text]
		// 	})
		// })
	}
	handleSubmit(){
		if(this.state.text===''){
			return	
		}
		// socket.emit('sendmsg',{text:this.state.text});
		// this.setState({
		// 	text:''
		// });
		const form = this.props.user._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMsg({form,to,msg});
		this.setState({
			text:''
		})
	}
	render() {
		return (<div>
			<div>
				{this.state.msg.map((v,i)=>{
					return <p key={i}>{v}</p>
				})}
			</div>
			<div className="stick-footer">
				<List>
					<InputItem 
					 value={this.state.text}
					 onChange={v=>{
					 	this.setState({text:v})
					 }}
					 extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
					 placeholder='请输入'></InputItem>
				</List>
			</div>
		</div>)
	}
}