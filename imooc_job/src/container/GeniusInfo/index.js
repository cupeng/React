import React from 'react';
import { NavBar,Icon,InputItem,TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector/';
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';
@connect(
	state=>state.user,
	{update}
)
export default class GeniusInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:'',
			desc:''
		}
	}
	onChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render() {
		const path = this.props.location.pathname;
		const redirectTo = this.props.redirectTo;
		return (<div>
		    {redirectTo && redirectTo !== path ?<Redirect to={this.props.redirectTo} />:null}
			<NavBar mode="dark">牛人完善信息页</NavBar>
			<AvatarSelector selectAvatar={(imgname)=>{
				this.setState({
					avatar:imgname
				})
			}} />
			<InputItem onChange={(v)=>this.onChange('title',v)}>
				求职岗位
			</InputItem>
			<TextareaItem autoHeight title="个人简介" rows={3}  onChange={(v)=>this.onChange('desc',v)}></TextareaItem>
			<Button onClick={()=>{
				this.props.update(this.state);
			}} type='primary'>保存</Button>
		</div>)
	}
}