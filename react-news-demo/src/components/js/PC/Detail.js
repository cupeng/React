import React from 'react';
import {Row,Col,BackTop} from 'antd';
import 'whatwg-fetch';
import {BrowserRouter,Router,Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Images from './image-block';
import Comment from '../comments';
export default class Detail extends React.Component {
	constructor(){
		super();
		this.state = {
			news : []
		}
	}
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey)
		.then(res=>{
			return res.json();
		}).then(data=>{
			console.log(data);
			this.setState({
				news:data
			});
			document.title = this.state.news.title + ' - React News | React 驱动的新闻平台';
			
		})
	}
	render() {
		return (<div>
				<Header></Header>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="main">
						<div className="mainArticle" dangerouslySetInnerHTML={{__html:this.state.news.pagecontent}}>
						
						</div>
						<div>
							<Comment uniquekey={this.props.match.params.uniquekey} />
						</div>
						
					</Col>
					<Col span={6}>
						<Images count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="165px"/>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Footer></Footer>
				<BackTop />
			</div>)
	}
}