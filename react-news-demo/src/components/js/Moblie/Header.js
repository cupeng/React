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
	setModalVisible = () =>{
		this.setState({
			modalVisible:false
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword).then(res=>{
			this.setState({
				userNickName:res.data.NickUserName,
				userid:res.data.NickUserName
			});
			message.success("请求成功");
		})
	}
	login = () =>{
		this.setState({
			modalVisible:true
		})
	}
	render() {
		let {getFieldProps} = this.props.form;
		const userShow = this.state.hasLogined?
			<Icon type="inbox" />
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