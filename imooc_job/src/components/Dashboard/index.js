import React from 'react';
import {connect} from 'react-redux';
import { NavBar } from 'antd-mobile';
import { Switch,Route } from 'react-router-dom';
import {getMsgList,recvMsg} from '../../redux/chat.redux';
import NavLink from '../NavLink/';
import Boss from '../../components/Boss/';
import Genius from '../../components/Genius/';
import Msg from '../../components/Msg/';
import User from '../../components/User/';

@connect(
	state=>state,
	{getMsgList,recvMsg}
)

export default class Dashboard extends React.Component {
	componentDidMount(){
		this.props.getMsgList();
		this.props.recvMsg();
	}
	render() {
		const {pathname} = this.props.location;
		const user = this.props.user;
		const navList = [
			{
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'BOSS',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg	
			},
			{
				path:'/user',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User	
			}
		];
		return (<div>
			<NavBar className='fixd-header' mode='dard'>{navList.map(v=>(v.path==pathname)?v.title:null)}</NavBar>
			<div>
				<Switch>
					{navList.map(v=>(
						<Route key={v.path} path={v.path} component={v.component}></Route>
					))}
				</Switch>
			</div>
			<NavLink data={navList} />
		</div>)
	}
}