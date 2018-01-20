//配置路由
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './Home/';
import About from './About/';
import News from './News/';

class App extends React.Component {
	render() {
		return (<Router>
			<div>
				<Route exact path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/news" component={News}></Route>
			</div>
		</Router>)
	}
}

export default App;