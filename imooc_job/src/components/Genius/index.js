import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
import UserInfo from '../UserInfo/';
@connect(
	state=>state.chatuser,
	{getUserList}
)
export default class Genius extends React.Component {
	componentDidMount() {
		this.props.getUserList('boss');
	}
	render(){
		return (<div>
			<UserInfo userlist={this.props.userlist} />
		</div>)
	}
}