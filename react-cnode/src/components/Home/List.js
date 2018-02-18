import React from 'react';
import {List,Avatar,Icon} from 'antd';
import axios from 'axios';

class RightList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			msg:[]
		}
	}
	componentDidMount(){
		axios.get("https://cnodejs.org/api/v1/topics?tab=share").then(res=>{
			this.setState({
				msg:res.data.data
			})
		})
	}
	render(){
		const {msg} = this.state;
		return (<div>
			<List
			  dataSource={msg}
			  renderItem={(item)=>{
			  	return (
			  		<List.Item actions={}>

			  		</List.Item>
			  	)
			  }}
			 />
		</div>)
	}
}

export default RightList;