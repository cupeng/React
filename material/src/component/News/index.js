import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from '../Commom/Footer';
import NewsList from './NewsList';

class News extends React.Component {
	render() {
		return (<MuiThemeProvider>
				<NewsList />
				<Footer />
			</MuiThemeProvider>)
	}
}

export default News;