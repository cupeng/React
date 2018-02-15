import React from 'react';
import axios from 'axios';
import {Card,WingBlank} from 'antd-mobile';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
import UserInfo from '../UserInfo/';
@connect(
	state=>state.chatuser,
	{getUserList}
)
export default class Boss extends React.Component {
	componentDidMount() {
		this.props.getUserList('genius');
	}
	render(){
		return (<div>
			<UserInfo userlist={this.props.userlist} />
		</div>)
	}
}