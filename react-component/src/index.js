import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Article from './component/article';


class App extends React.Component {
	render() {
		return (<div>
			<Header />
			<Banner />
			<Article />
			<Footer />
		</div>)	
	}
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
)
