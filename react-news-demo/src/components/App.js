import React from 'react';
import 'antd/dist/antd.css';
 import {Link,Route,BrowserRouter as Router} from 'react-router-dom' ;
import MediaQuery from 'react-responsive';
import PC_index from './js/PC';
import MO_index from './js/Moblie';
import MO_details from './js/Moblie/Detail';
import PC_details from './js/PC/Detail';
import PC_Users from './js/PC/Users';
import MO_Users from './js/Moblie/Users';

export default class App extends React.Component {
	render() {
		return (<div>
			<MediaQuery query='(min-device-width:1224px)'>
				<Router>
					<div>
						<Route exact path="/" component={PC_index}></Route>
						<Route path="/details/:uniquekey" component={PC_details}></Route>
						<Route path="/Users" component={PC_Users}></Route>
					</div>
				</Router>
			</MediaQuery>
			<MediaQuery query='(max-device-width:1224px)'>
				<Router>
					<div>
						<Route exact path="/" component={MO_index}></Route>
						<Route path="/details/:uniquekey" component={MO_details}></Route>
						<Route path="/Users" component={MO_Users}></Route>
					</div>
				</Router>
			</MediaQuery>					
		</div>)
	}
}