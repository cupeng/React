import React from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from './Drawer';

const styles = {
	textAlign:'center'
};


class AppBarExampleIcon extends React.Component {
  handleTapTitle = () =>{
  	alert(1);
  }
  handleLeftIcon = () =>{
  		this.refs.drawer.handleToggle();
  }
  render(){
  	return (<div>
  		<AppBar 
  		titleStyle={styles}
  		onTitleClick = {this.handleTapTitle}
  		onLeftIconButtonClick={this.handleLeftIcon}
	    title="React小站"
	    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
		<Drawer ref="drawer"  />
	</div>)
  }
  
}


export default AppBarExampleIcon;