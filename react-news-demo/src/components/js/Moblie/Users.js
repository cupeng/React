import React from 'react';
import {upload,notification, Row,Col,Menu,Modal,Icon,message,Form,Tabs,Input,Button,CheckBo,Card} from 'antd';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'whatwg-fetch';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


export default class Users extends React.Component {
	constructor() {
		super();
		this.state = {
			usercollection:[],
			usercomments: [],
			previewImage: '',
			previewVisible: false
		}
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid)
		.then(res=>{
			return res.json();
		}).then(json=>{
			this.setState({
				usercollection:json
			})
		})
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid)
		.then(res=>{
			return res.json();
		}).then(json=>{
			this.setState({
				usercomments:json
			});
		})
	}
	render() {
		const {usercollection} = this.state;
		const {usercomments} = this.state;
		let arrLi = [];
		const usercollectionList = usercollection.forEach((item,index)=>{
				arrLi.push(<Card key={index} title={item.Title} extra={<a href={`/details/${item.uniquekey}`}>查看</a>}></Card>);
		});

		let arr = [];
		const usercommentsList = usercomments.forEach((item,index)=>{
				arr.push(<Card key={index} title={item.uniquekey} extra={<a href={`/details/${item.uniquekey}`}>查看</a>}></Card>);
		});
		return (<div>
			<Header />
			<Row>
				<Col span={24}>
					<Tabs>
						<TabPane tab="我的收藏列表" key="1">
							<div className="comment">
								{arrLi}
							</div>
						</TabPane>
						<TabPane tab="我的评论列表" key="2">
							<div>
								{arr}
							</div>
						</TabPane>
						<TabPane tab="头像设置" key="3">
							
						</TabPane>
					</Tabs>
				</Col>
			</Row>
			<Footer />
		</div>)
	}
}
