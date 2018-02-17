import React from 'react';
import Header from '../Commom/Header';
import Footer from '../Commom/Footer';

class Book extends React.Component{
	render(){
		return (
			<div>
				<Header />
				<h2>Book</h2>
				<Footer />
			</div>
		)
	}
}
export default Book;