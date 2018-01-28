import React from 'react';
import { Row,Col} from 'antd';
import '../../css/PC.css';

export default class Footer extends React.Component {
	render() {
		return (<footer>
			<Row>
				<Col span={2}></Col>
				<Col span={20} className="footer">
					&copy;&nbsp;2018 ReactNews. All Rights Reserved.
				</Col>
				<Col span={2}></Col>
			</Row>
		</footer>)
	}
}