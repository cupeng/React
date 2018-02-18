import React from 'react';
import Header from '../Commom/Header';
import Footer from '../Commom/Footer';
import {Row,layout,Breadcrumb,Icon,Menu } from 'antd';
import axios from 'axios';
import Nav from './Nav';
import List from './List';
const { SubMenu } = Menu;
class Home extends React.Component {
	componentDidMount(){
		// axios.get("https://cnodejs.org/api/v1/topics?tab="+this.props.tab).then(res=>{
					
		// });
	}
	render(){
		return (
			<div>
				<Header />
				<div className="content">
					<div className="mainWrap">
						<Row>
							<Nav />	
							<List />
						</Row>
					</div>
			    </div>
				<Footer />
			</div>
		)
	}
}

export default Home;