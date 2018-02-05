import React from 'react';
import axios from 'axios';
import {Card,WingBlank} from 'antd-mobile';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
@connect(
	state=>state.chatuser,
	{getUserList}
)
export default class Boss extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userlist:[]
		}
	}
	componentDidMount() {

		this.props.getUserList('genius');
	}
	render(){
		return (<div>
			<WingBlank>
			   {this.props.userlist.map(v=>(
			   		v.avatar?<Card key={v._id}>
			   			<Card.Header
			   			 extra={<span>{v.title}</span>}
			   			 title={v.user}
			   			 thumb={require(`../AvatarSelector/images/${v.avatar}.png`)}>
						</Card.Header>
						<Card.Body>
							{v.desc.split('\n').map(v=>(
								<span key={v}>{v}</span>
							))}
						</Card.Body>
			   		</Card>:null
			   	))}
			</WingBlank>
		</div>)
	}
}