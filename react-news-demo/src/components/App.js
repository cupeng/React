import React from 'react';
import 'antd/dist/antd.css';
import { Router,Route,hashHistory } from 'react-router';
import MediaQuery from 'react-responsive';
import PC_index from './js/PC';
import MO_index from './js/Moblie';

export default class App extends React.Component {
	render() {
		return (<div>
			<MediaQuery query='(min-device-width:1224px)'>
				<PC_index />
			</MediaQuery>
			<MediaQuery query='(max-device-width:1224px)'>
				<MO_index />
			</MediaQuery>					
		</div>)
	}
}