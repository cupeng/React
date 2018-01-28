import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import '../../css/PC.css';

export default class Index extends React.Component {
	render() {
		return (<div>
				<Header />
				<Container /> 
				<Footer />
			</div>)
	}
}
