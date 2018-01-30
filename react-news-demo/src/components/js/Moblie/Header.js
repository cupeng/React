import React from 'react';
import Logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Row,Col,Menu,Modal,Icon,message,Form,Tabs,Input,Button,CheckBox} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			current:'top',
			modalVisible:false,
			action:'login',
			hasLogined:false,
			userNickName:'',
			userid:0
		};

	}
	componentWillMount(){
		if (localStorage.userid!='') {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	};
	handleClick = (e) => {
		if(e.key=="register"){
			this.setState({
				current:'register'
			})
			this.cencle();
		}else{
			this.setState({
				current:e.key
			});
		}
		
	}
	cencle = () =>{
		this.setState({
			modalVisible:true
		})
	}
	setModalVisible = () =>{
		this.setState({
			modalVisible:false
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
	render() {
		let {getFieldProps} = this.props.form;
		const userShow = this.state.hasLogined?
			<Link to={`/Users`}>
					<Icon type="inbox"/>
				</Link>
		: <Icon type="setting"  onClick={this.login} />
		return (<div id="mobileheader">
			<header>
				<a href={`javascript:;`}>
					<img src={Logo} alt="logo" />
					<span>ReactNews</span>
				</a>
				{userShow}
			</header>
			<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={this.setModelVisible} onOk={this.setModalVisible} okText="关闭">
							<Tabs type="card">
								<TabPane tab="登录" key="1">
									<Form horizontal = "true" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form horizontal="true" onSubmit={this.handleSubmit}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
										</FormItem>
										<FormItem label="确认密码">
											<Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
		</div>)
	}
}
export default Header = Form.create({})(Header);