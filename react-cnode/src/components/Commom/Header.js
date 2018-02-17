import React from 'react';
import {Layout, Row, Col, Menu, Icon, Divider, Button, Dropdown} from 'antd';
import {NavLink, Link} from "react-router-dom";
import '../../index.css';
const topMenu = (
    <Menu className="dropMenu">
        <Menu.Divider/>
        <Menu mode="horizontal">
	        <Menu.Item key="1">
	        	<Link to="/"><Icon type="home" /><span>首页</span></Link>
	        </Menu.Item>
	        <Menu.Item key="2">
	        	<Link to="/book"><Icon type="book" /><span>教程</span></Link>
	        </Menu.Item>
	        <Menu.Item key="3">
	        	<Link to="/about"><Icon type="info-circle-o" /><span>关于</span></Link>
	        </Menu.Item>
		</Menu>
    </Menu>
);
class Header extends React.Component {

	render(){
		return (
			<Layout.Header id="header">
				<Row>	
					<Col id="headerRow" className="mainWrap">
						<Col md={6} xs={24}>
							<h1 className="logo">cNode</h1>
						</Col>
						<Col md={18} xs={0} className="headerRight">
							<Divider type="vertical" id="headerDivider" />
							<Menu id="nav" mode="horizontal">
						        <Menu.Item key="1">
	        						<Link to="/"><Icon type="home" /><span>首页</span></Link>
						        </Menu.Item>
						        <Menu.Item key="2">
	        						<Link to="/book"><Icon type="book" /><span>教程</span></Link>
						        </Menu.Item>
						        <Menu.Item key="3">
	        						<Link to="/about"><Icon type="info-circle-o" /><span>关于</span></Link>
						        </Menu.Item>
							</Menu>
						</Col>
					</Col>
						<Row id="topMenu">
                    <Col xs={24} md={0}>
                        <Dropdown overlay={topMenu} placement="bottomRight" trigger={["click","touchend"]}>
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
				</Row>
			</Layout.Header>
		)
	}
}

export default Header;