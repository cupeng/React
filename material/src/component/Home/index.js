import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Commom/Header';
import Card from './Card';
import GridList from './GridList';
import Footer from '../Commom/Footer'

class Home extends React.Component {
	render() {
		return <MuiThemeProvider>
				 <Header />
				 <Card />
				 <GridList />
				 <Footer />
		</MuiThemeProvider>
	}
	
}
export default Home;
