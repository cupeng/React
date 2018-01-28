import React from 'react';
import {Carousel} from 'antd';
import img1 from '../../img/carousel_1.jpg';
import img2 from '../../img/carousel_2.jpg';
import img3 from '../../img/carousel_3.jpg';
import img4 from '../../img/carousel_4.jpg';
import Images from './image-block';

export default class Banner extends React.Component {
	render() {
		const settings = {
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true
		};
		return (<div className="leftContainer">
					<div className="carousel">
						<Carousel {...settings}>
							<div><a href={`javascript:;`}><img src={img1} /></a></div>
							<div><a href={`javascript:;`}><img src={img2} /></a></div>
							<div><a href={`javascript:;`}><img src={img3} /></a></div>
							<div><a href={`javascript:;`}><img src={img4} /></a></div>
						</Carousel>
						<Images count={6} type="guonei" width="401px" cartTitle="国内头条" imageWidth="123px" />
					</div>
				</div>)
	}
}
