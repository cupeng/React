import React from 'react';
import {Row,Col,Tabs} from 'antd';
import Banner from './Banner';
import AutoTab from './AutoTab';
import Images from './image-block';
import Product from './products';
const TabPane = Tabs.TabPane;


export default class Container extends React.Component {
	render() {
		return (<div>
				   <Row>
				   	 <Col span={2}></Col>
				   	 <Col span={20} className="container">
						<Banner />
						<Tabs className="tabs_news">
							<TabPane tab="新闻" key="1">
								<AutoTab count={22} width="100%" bordered="false" type="top" />
							</TabPane>
							<TabPane tab="国际" key="2">
								<AutoTab count={22} width="100%" bordered="false" type="guoji" />
							</TabPane>
						</Tabs>
						<Tabs className="tabs_news" style={{width:'325px'}}>
							<TabPane tab="React产品" key="1">
								<Product />
							</TabPane>
						</Tabs>
				   	 </Col>
				   	 <Col span={2}></Col>
				   </Row>
				   <Row>
						<Col span={2}></Col>
						<Col span={20}>
							<Images count={8} type="keji" width="100%" cartTitle="科技" imageWidth="137px"/>
							<Images count={16} type="yule" width="100%" cartTitle="娱乐" imageWidth="137px"/>
						</Col>
						<Col span={2}></Col>
				   </Row>
			</div>)
	}
}


