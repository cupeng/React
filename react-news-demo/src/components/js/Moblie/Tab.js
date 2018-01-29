import React from 'react';
import { Tabs } from 'antd';
import Card from './Card';
import Banner1 from './Banner';
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {
	render() {
		return (<div>
				<Tabs>
			      <TabPane tab="头条" key="1">
			      	  <Banner1 />
			      	  <Card count={8} type="top"  />
			      </TabPane>
			      <TabPane tab="社会" key="2">
					  <Card count={8} type="shehui"  />
			      </TabPane>
			      <TabPane tab="国内" key="3">
					  <Card count={8} type="guonei"  />
			      </TabPane>
			      <TabPane tab="国际" key="4">
					  <Card count={8} type="guoji"  />
			      </TabPane>
			      <TabPane tab="娱乐" key="5">
					  <Card count={8} type="yule"  />
			      </TabPane>
			      <TabPane tab="体育" key="6">
					  <Card count={8} type="tiyu"  />
			      </TabPane>
			      <TabPane tab="科技" key="7">
					  <Card count={8} type="keji"  />	
			      </TabPane>
			      <TabPane tab="时尚" key="8">
					  <Card count={8} type="shishang"  />	
			      </TabPane>
			    </Tabs>
			</div>)
	}
}