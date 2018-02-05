import React from 'react';
import {connect} from 'react-redux';
import { NavBar } from 'antd-mobile';
import { Switch,Route } from 'react-router-dom';
import NavLink from '../NavLink/';
import Boss from '../../components/Boss/';
import Genius from '../../components/Genius/';
import Msg from '../../components/Msg/';
import User from '../../components/User/';

@connect(
	state=>state
)

export default class Dashboard extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const {pathname} = this.props.location;
		const user = this.props.user.type;
		const navList = [
			{
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user=='genius'
			},
			{
				path:'/genius',
				text:'BOSS',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg	
			},
			{
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User	
			}
		];
		return (<div>
			<NavBar mode="dard" className="fixd-header">
				{navList.find(v=>v.path==pathname).title}
			</NavBar>
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