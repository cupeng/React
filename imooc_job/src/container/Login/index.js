import React from 'react';
import Logo from '../../components/Logo/';
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';

@connect(
	state=>state.user,
	{login}
)

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user:'',
			pwd:''
		}
	}
	register = () =>{
		this.props.history.push('./register');
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	handleLogin = () =>{
		this.props.login(this.state);
	}
	render() {
		return (<div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
			<Logo title={`用户登录`} />
			{this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
			<WingBlank>
				<List>
					<InputItem
				 		onChange={v=>this.handleChange('user',v)}>用户</InputItem>
					<InputItem type='password'
				 		onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
				</List>
				<WhiteSpace />
				<Button onClick={this.handleLogin} type='primary'>登录</Button>
				<WhiteSpace />
				<Button onClick={this.register} type="primary">注册</Button>
			</WingBlank>
		</div>)
	}
}