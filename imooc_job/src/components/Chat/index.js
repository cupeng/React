import React from 'react';
import io from 'socket.io-client';
import {InputItem,List,NavBar,Icon,Grid} from 'antd-mobile';
import {connect} from 'react-redux'; 
import {getMsgList,sendMsg,recvMsg,readMsg} from '../../redux/chat.redux';
import {getChatId} from '../../util';
const socket = io('ws://localhost:9093');

@connect(
	state=>state,
	{ getMsgList,sendMsg,recvMsg,readMsg }
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
		if(!this.props.chat.chatmsg.length){	
			this.props.getMsgList();
			this.props.recvMsg();
		}
	}
	componentWillUnmount(){
		const to = this.props.match.params.user
		this.props.readMsg(to)
	}
	fixCarousel(){
		setTimeout(()=>{
			window.dispatchEvent(new Event('resize'));
		},0)
	}
	handleSubmit(){
		if(this.state.text===''){
			return	
		};
		const from = this.props.user._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMsg({from,to,msg});
		this.setState({
			text:'',
			showEmoji:false
		});
	}
	back =()=>{
		this.props.history.goBack();
	};
	render() {
		const emoji = '馃榾 馃槂 馃槃 馃榿 馃槅 馃槄 馃槀 馃槉 馃槆 馃檪 馃檭 馃槈 馃槍 馃槏 馃槝 馃槜 馃槞 馃槡 馃構 馃槣 馃槤 馃槢 馃 馃 馃 馃槑 馃槒 馃槖 馃槥 馃様 馃槦 馃槙 馃檨 馃槪 馃槚 馃槴 馃槱 馃槫 馃槧 馃槨 馃樁 馃槓 馃槕 馃槸 馃槮 馃槯 馃槷 馃槻 馃樀 馃槼 馃槺 馃槰 馃槹 馃槩 馃槬 馃槶 馃槗 馃槳 馃槾 馃檮 馃 馃槵 馃 馃樂 馃 馃 馃槇 馃懣 馃懝 馃懞 馃挬 馃懟 馃拃 鈽狅笍 馃懡 馃懢 馃 馃巸 馃樅 馃樃 馃樄 馃樆 馃樇 馃樈 馃檧 馃樋 馃樉 馃憪 馃檶 馃憦 馃檹 馃憤 馃憥 馃憡 鉁?馃 馃憣 馃憟 馃憠 馃憜 馃憞 鉁? 馃枑 馃枛 馃憢  馃挭 馃枙 鉁嶏笍  馃拝 馃枛 馃拕 馃拫 馃憚 馃憛 馃憘 馃憙 馃憗 馃憖 '
										.split(' ')
										.filter(v=>v)
										.map(v=>({text:v}))
		const user = this.props.match.params.user;
		const users = this.props.chat.users;
		const Item = List.Item;
		if(!users[user]){
			return null;
		}const chatid = getChatId(user,this.props.user._id)
		const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
		return (<div>
			<div id='chat-page'>
				<NavBar mode='dark'	
					icon={<Icon type="left" />}
					onLeftClick={this.back}
				>
					{users[user].name}
				</NavBar>
				<div>
					{chatmsgs.map((v)=>{
						const avatar = require(`../AvatarSelector/images/${users[v.from].avatar}.png`);
						return v.from==user?(
							<List key={v._id}>
								<Item
									thumb={avatar}
								>{v.content}</Item>
							</List>
						):(
							<List className="chat-me" key={v._id}>
								<Item extra={<img src={avatar} />}
								>{v.content}</Item>
							</List>
						)
					})}
				</div>
			</div>
			<div className="stick-footer">
				<List>
					<InputItem 
					 value={this.state.text}
					 onChange={v=>{
					 	this.setState({text:v})
					 }}
					 extra={<div><span onClick={()=>{
					 	this.setState({
					 		showEmoji:!this.state.showEmoji
					 	})
					 	this.fixCarousel();
					 }} style={{marginRight:15}}>馃槃</span><span onClick={()=>this.handleSubmit()}>发送</span></div>}
					 placeholder='请输入'></InputItem>
				</List>
				{this.state.showEmoji?<Grid
					data={emoji}
					columnNum={9}
					carouselMaxRow={4}
					isCarousel={true}
					onClick={el=>{
						this.setState({
							text:this.state.text+el.text
						})
					}}
				 />:null}
				
			</div>
		</div>)
	}
}