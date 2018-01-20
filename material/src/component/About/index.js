import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from '../Commom/Footer';
import Tabs from './Tabs';
import Divider from 'material-ui/Divider';
import Datepicker from './DatePicker';

class About extends React.Component {
	render() {
		return (<MuiThemeProvider>
				<Tabs />
				<Divider style={{marginTop:'20px'}} />
				<Datepicker />
				<Footer />
			</MuiThemeProvider>)
	}
}

export default About;