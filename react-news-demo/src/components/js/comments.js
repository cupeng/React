import React from 'react';
import {notification, Row,Col,Menu,Modal,Icon,message,Form,Tabs,Input,Button,CheckBo,Card} from 'antd';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Comments extends React.Component {
	constructor(){
		super();
		this.state = {
			comments:[]
		}
	};
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey)
		.then(res=>{
			return res.json();
		}).then(data=>{
			this.setState({
				comments:data
			});
		})
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		const formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark)
			.then(res=>{
				return res.json();
			}).then(json=>{
				this.componentDidMount();
			})
	}
	addUserColletion = () =>{
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});	
	}
	render() {
		let {getFieldProps} = this.props.form;
		const {comments}  = this.state;
		let arr = [];
		comments.forEach((item,index)=>{
			arr.push(
				<Card key={index} title={item.UserName} extra={<a href={`javascript:;`}>发布于 {item.datetime}</a>}>
					<p>{item.Comments}</p>
				</Card>
			)
		})
		return (<div className="comment">
				<Row>
					<Col span={24}>
						<div style={{display:this.state.comments.length>0?'none':'block'}}></div>
						{arr}
						<Form onSubmit={this.handleSubmit}>
							<FormItem label="您的评论">
								<Input type="textarea" placeholder='随便写' {...getFieldProps('remark',{initalValue:''})} />
								<Button type="primary" htmlType="submit">提交评论</Button>
								&nbsp;&nbsp;
								<Button type="primary" onClick={this.addUserColletion} htmlType="button">收藏文章</Button>
							</FormItem>
						</Form>
					</Col>
				</Row>
			</div>)
	}
}

export default Comments = Form.create({})(Comments);