import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';

import reducers from './reducer';
import './config';

import AuthRoute from './components/authRoute/';
import Login from './container/Login/';
import Register from './container/Register/';
import BossInfo from './container/BossInfo/';
import GeniusInfo from './container/GeniusInfo/';
import Dashboard from './components/Dashboard/';
import Chat from './components/Chat/';
import './index.css';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute />
				<Switch>
					<Route path="/chat/:user" component={Chat}></Route>
					<Route path="/geniusInfo" component={GeniusInfo}></Route>
					<Route path="/bossinfo" component={BossInfo}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
					<Route component={Dashboard}></Route>
				</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById("root")
)