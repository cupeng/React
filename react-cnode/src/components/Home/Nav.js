import React from 'react';
import {Row,Col} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';

const subMenu = [
	{
		item:"全部",
		path:"?tab=all"
	},
	{
		item:"精华",
		path:"?tab=good"
	},
	{
		item:"问答",
		path:"?tab=ask"
	},
	{
		item:"分享",
		path:"?tab=share"
	},
	{
		item:"招聘",
		path:"?tab=job"
	},
	{
		item:"测试",
		path:"?tab=dev"
	}
]

class Nav extends React.Component{
	constructor(props){
		super(props);
	}
	fetchData(e){
		const path = e.path;
		axios.get("https://cnodejs.org/api/v1/topics"+path).then(res=>{
			
		})
	}

	render(){
		return (
			<Col md={6} xs={24}>
				<nav className="subNav">
					{subMenu.map((e,i)=>{
						return <Link onClick={()=>this.fetchData(e)} to={e.path} className="active" key={i}>{e.item}</Link>
					})}
				</nav>
			</Col>
		)
	}
}

export default Nav;