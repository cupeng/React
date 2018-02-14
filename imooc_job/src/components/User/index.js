import React from 'react';
import {connect} from 'react-redux';
import {Result, List,WhiteSpace,Modal} from 'antd-mobile';
import browserCookie from 'browser-cookies';
import {Redirect} from 'react-router-dom';
import {logoutSubmit} from '../../redux/user.redux';
@connect(
	state=>state.user,
	{logoutSubmit}
)
export default class User extends React.Component {
	constructor(props){
		super(props)
	}
	logout = () =>{
		const alert = Modal.alert;
		alert('注销','确认退出登录吗?',[
			{text:'取消'},
			{text:'确认',onPress:()=>{
				browserCookie.erase('userid');
				this.props.logoutSubmit();
			}}	
		])
	}
	render(){
		const props = this.props;
		const Item = List.Item;
		const Brief = Item.Brief;
		return props.user?(<div>
			<Result
			 img={<img style={{width:50}} src={require(`../AvatarSelector/images/${props.avatar}.png`)} />}
			 title={props.user} message={props.type=='boss'?props.company:null} />
			<List renderHeader={()=>'简介'}>
					<Item
						multipleLine
					>
						{props.title}
						{props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money?<Brief>薪资:{props.money}</Brief>:null}
					</Item>
					
				</List>
				<WhiteSpace />
				<List>
					<Item onClick={this.logout}>退出登录</Item>
				</List>
		</div>):<Redirect to={props.redirectTo} />
	}
}
