import React from 'react';
import Logo from '../../components/Logo/';
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';
import Form from '../../components/Form/';

@connect(
	state=>state.user,
	{login}
)

@Form

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user:'',
			pwd:''
		}
		this.register = this.register.bind(this);
	}
	register = () =>{
		this.props.history.push('./register');
	}
	handleLogin = () =>{
		this.props.login(this.props.state);
	}
	render() {
		return (<div>
			{(this.props.redirectTo&&this.props.redirectTo!='/login')? <Redirect to={this.props.redirectTo} />:null}
			<Logo title={`用户登录`} />
			{this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
			<WingBlank>
				<List>
					<InputItem
				 		onChange={v=>this.props.handleChange('user',v)}>用户</InputItem>
					<InputItem type='password'
				 		onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
				</List>
				<WhiteSpace />
				<Button onClick={this.handleLogin} type='primary'>登录</Button>
				<WhiteSpace />
				<Button onClick={this.register} type="primary">注册</Button>
			</WingBlank>
		</div>)
	}
}