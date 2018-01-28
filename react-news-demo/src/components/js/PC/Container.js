import React from 'react';
import {Row,Col,Tabs} from 'antd';
import Banner from './Banner';
import AutoTab from './AutoTab';
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
				   	 </Col>
				   	 <Col span={2}></Col>
				   </Row>
			</div>)
	}
}


