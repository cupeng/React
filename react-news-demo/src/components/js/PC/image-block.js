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
		const styleImg = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styleH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
		let arr =[]; 
		this.state.news.forEach((item,index)=>{
			arr.push(<div key={index} className="imageblock">
					<div className="custom-image">
						<img alt={item.title} src={item.thumbnail_pic_s} style={styleImg} />
					</div>	
					<div className="custom-card">
						<h3 style={styleH3}>{item.title}</h3>
						<p style={styleH3}>{item.author_name}</p>
					</div>
				</div>);
		})
		return (
		<div className="topNewsList">
					<Card title={this.props.cartTitle} bordered={true} style={{
				width: this.props.width
			}}>	
						<div style={{display:this.state.news.length>0?'none':'block'}}></div>
						{arr}
					</Card>		
		</div>)
	}
}