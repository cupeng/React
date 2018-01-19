import React from 'react';
import axios from 'axios';
class Article extends React.Component {
	constructor() {
		super();
		this.state = {
			msg:[]
		};
	};
	componentDidMount() {
		this.fetchData();
	}
	fetchData=()=>{
		axios.get("https://weixin.jirengu.com/weather").then(res=>{
			console.log(res.data.weather[0].future);
			this.setState({
				msg:res.data.weather[0].future
			})
		})
	}

	render() {
		let arrLi = [];
		this.state.msg.map((item,index)=>{
			arrLi.push(<li key={index}>
				{item.date}
			</li>);
		})
		return (<div>
				<ul>
				{arrLi}
				</ul>
			</div>)
	}
}
export default Article;