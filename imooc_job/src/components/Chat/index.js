import React from 'react';
import io from 'socket.io-client';
import {InputItem,List,NavBar} from 'antd-mobile';
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
		// socket.on('recvmsg',(data)=>{
		// 	this.setState({
		// 		msg:[...this.state.msg,data.text]
		// 	})
		// })
	}
	handleSubmit(){
		// if(this.state.text===''){
		// 	return	
		// }
		// socket.emit('sendmsg',{text:this.state.text});
		// this.setState({
		// 	text:''
		// });
		const from = this.props.user._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMsg({from,to,msg});
	}
	render() {
		const user = this.props.match.params.user;
		const Item = List.Item;
		return (<div id='chat-page'>
			<NavBar mode='dark'>
				{user}
			</NavBar>
			<div>
				{this.props.chat.chatmsg.map((v)=>{
					return v.from==user?(
						<List key={v._id}>
							<Item>{v.content}</Item>
						</List>
					):(
						<List className="chat-me" key={v._id}>
							<Item>{v.content}</Item>
						</List>
					)
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