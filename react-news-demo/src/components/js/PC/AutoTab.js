import React from 'react';
import {Card,Tabs} from 'antd';
import 'whatwg-fetch';
import {BrowserRouter,Router,Route,Link} from 'react-router-dom';
const TabPane = Tabs.TabPane;

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
			console.log(item.uniquekey);
			arr.push(<li key={index}>
				{item.title}
			</li>);
		})
		return (
		<div className="topNewsList">
					<Card title={this.props.cartTitle} bordered={true} style={{
				width: this.props.width
			}}>
						<div style={{display:this.state.news.length>0?'none':'block'}}>暂无数据...</div>
						<ul>{arr}</ul>
					</Card>		
		</div>)
	}
}