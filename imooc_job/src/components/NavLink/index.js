import React from 'react';
import PropTypes from 'prop-types';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import { connect} from 'react-redux';

@withRouter

@connect(
	state=>state
)

export default class NavLink extends React.Component {
	static propTypes = {
		data:PropTypes.array.isRequired
	}
	render() {
		const navList = this.props.data.filter(v=>!v.hide);
		const {pathname} = this.props.location;
		return (<div className="fixd-footer">
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item badge={v.path=='/msg'?this.props.chat.unread:0}
					 selected={pathname===v.path}
					 onPress={()=>{
					 	this.props.history.push(v.path)
					 }}
					 selectedIcon={{uri:require(`./images/${v.icon}-active.png`)}}
					 icon={{uri:require(`./images/${v.icon}.png`)}} key={v.path} title={v.text}>

					</TabBar.Item>
				))}
			</TabBar>
		</div>)
	}
}