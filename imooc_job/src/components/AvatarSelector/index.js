import React from 'react';
import { Grid,List } from 'antd-mobile';

export default class AvatarSelector extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render() {
		const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
				  .split(',').map((item,index)=>({
				  	icon:require(`./images/${item}.png`),
				  	text:item
				  }))
		const gridHeader = this.state.text
						   ? (<div>
					   			<span>已选择头像</span>
					   			<img style={{width:20}} src={this.state.icon} alt={this.state.text} />
						   	  </div>)
						   : <div>请选择头像</div>
		return (<div>
			<List renderHeader={()=>gridHeader}></List>
			<Grid onClick={ele=>{
				this.setState(ele);
				this.props.selectAvatar(ele.text)
			}} columnNum={5} data={avatarList}></Grid>
		</div>)
	}
}
