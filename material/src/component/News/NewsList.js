import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import 'whatwg-fetch';
const newsUrl = 'https://weixin.jirengu.com/weather';

class ListExampleChat extends React.Component {
  constructor() {
    super();
    this.state = {
      dataList : []
    };
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData = () =>{
      fetch(newsUrl).then(res => {
        return res.json();
      }).then(res => {
        setTimeout(()=>{
          this.setState({
            dataList:res.weather[0].future
          })
        },500)
        
      })
  }
  render() {
    let arrLi = [];
    this.state.dataList.forEach((item,index)=>{
      arrLi.push(<ListItem key={index}
            primaryText={item.text}
            leftAvatar={<Avatar src={`https://weixin.jirengu.com/images/weather/code/${item.code2}.png`} />}
            rightIcon={<CommunicationChatBubble />}
          />)
    })
    return (
      <div>
        <List>
          <Subheader>Recent chats</Subheader>
          
          {arrLi}
        </List>
  </div>
    )
  }
};

export default ListExampleChat;