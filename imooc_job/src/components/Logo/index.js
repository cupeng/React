import React from 'react';
import LogoImg from './job.png';
import './index.css';

export default class Logo extends React.Component {
	render() {
		return (<div className="logo">
			<img width="80%" src={LogoImg} alt={`logo`} />
			<p>{this.props.title}</p>
		</div>)
	}
}