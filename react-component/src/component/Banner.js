import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/antd/dist/antd.css';
import { Carousel } from 'antd';

class Banner extends React.Component {
	render() {
		return (<div>
				<Carousel autoplay>
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
				</Carousel>
			</div>)
	}
}

export default Banner;