import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tab from './Tab';
import '../../css/moblie.css';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Tab />
				<Footer />
			</div>)
	}
}
