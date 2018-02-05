import React from 'react';
import Logo from '../../components/Logo/';
import { List,InputItem,Radio,WingBlank,WhiteSpace,Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';
import Form from '../../components/Form/';

@connect(
	state=>state.user,
	{register}
)

@Form

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.handleRegister = this.handleRegister.bind(this);

	}
	componentDidMount(){
		this.props.handleChange('type','genius');
	}
	handleRegister(){
		this.props.register(this.props.state);
	}
	render() {
		const RadioItem = Radio.RadioItem;
		return (<div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
			<Logo title={`用户注册`} />
			{this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
			<List>
				<InputItem
				 onChange={v=>this.props.handleChange('user',v)}
				>用户</InputItem>
				<WhiteSpace />
				<InputItem
				 onChange={v=>this.props.handleChange('pwd',v)}
				 type="password">密码</InputItem>
				<WhiteSpace />
				<InputItem
				 onChange={v=>this.props.handleChange('repwd',v)}
				 type="password">确认密码</InputItem>
				<WhiteSpace />
				<RadioItem
				 onChange={()=>this.props.handleChange('type','genius')}
				 checked={this.props.state.type=='genius'}>
					牛人
				</RadioItem>
				<RadioItem
				 onChange={()=>this.props.handleChange('type','boss')}
				 checked={this.props.state.type=='boss'}>
					BOSS
				</RadioItem>
				<WhiteSpace />
				<Button type='primary' onClick={this.handleRegister}>注册</Button>
			</List>
		</div>)
	}
}