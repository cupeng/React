import React from 'react';
import {Row,Col,Tabs} from 'antd';
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
			arr.push(<section key={index} className="m_article list-item special_setion clearFix">
					<Link to={`details/${item.uniquekey}`}>
						<div className="m_article_img">
							<img src={item.thumbnail_pic_s} alt={item.title} />
						</div>
						<div className="m_article_info">
							<div className="m_article_title">
								<span>{item.title}</span>
							</div>
							<div className="m_article_desc_clearFix">
								<div className="m_article_deso_l">
									<span className="m_article_channel">{item.realtype}</span>
									<span className="m_article_time">{item.date}</span>
								</div>
							</div>
						</div>
					</Link>
				</section>);
		})
		return (<div>
					<Row>
						<Col span={2}></Col>
						<Col span={20}>
							{arr}
						</Col>
						<Col span={2}></Col>
					</Row>		
			</div>)
	}
}