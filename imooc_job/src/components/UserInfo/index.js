import React from 'react';
import {Card,WingBlank} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

@withRouter
export default class UserInfo extends React.Component {
	static propTypes = {
		userlist:PropTypes.array.isRequired
	}
	handleClick(v){
		this.props.history.push(`/chat/${v.user}`);
	}
	render() {
		return (<div>
			<WingBlank>
			   {this.props.userlist.map(v=>(
			   		v.avatar?<Card onClick={()=>this.handleClick(v)} key={v._id}>
			   			<Card.Header
			   			 extra={<span>{v.title}</span>}
			   			 title={v.user}
			   			 thumb={require(`../AvatarSelector/images/${v.avatar}.png`)}>
						</Card.Header>
						<Card.Body>
							{v.type=='boss'?<div>公司:{v.company}</div>:null}
							{v.desc.split('\n').map(d=>(
								<span key={d}>{d}</span>
							))}
							{v.type=='boss'?<div>薪资:{v.money}</div>:null}
						</Card.Body>
			   		</Card>:null
			   	))}
			</WingBlank>
		</div>)
	}
}
