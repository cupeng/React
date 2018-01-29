import React from 'react';
import {Card} from 'antd';
import 'whatwg-fetch';
import {BrowserRouter,Router,Route,Link} from 'react-router-dom';

export default class AutoTab extends React.Component {
	constructor(){
		super();
		this.state = {
			news:[]
		};
	}

	componentWillMount(){
		this.fetchData();
	}
	fetchData(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count)
			.then(res=>{
				return res.json();
			}).then(data=>{
				this.setState({
					news:data
				})
			})
	}
	render() {
		let arr =[]; 
		this.state.news.forEach((item,index)=>{
			arr.push(<li key={index}>
				<Link to={`details/${item.uniquekey}`} target="_blank">
					{item.title}
				</Link>
			</li>);
		})
		return (
		<div className="topNewsList">
					<Card>
						<div style={{display:this.state.news.length>0?'none':'block'}}>暂无数据...</div>
						<ul>{arr}</ul>
					</Card>		
		</div>)
	}
}