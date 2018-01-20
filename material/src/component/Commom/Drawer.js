import React from 'react';
import Drawer from 'material-ui/Drawer';
import { List,ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        
        <Drawer
          docked={false}
          width={175}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <List>
          <Link to="/News">
            <ListItem primaryText="News" leftIcon={<ContentInbox />} />
            <Divider />
          </Link>
          <Link to="/About">
            <ListItem primaryText="About" leftIcon={<ContentDrafts />} />
            <Divider />
          </Link>
          
        </List>

        </Drawer>
      </div>
    );
  }
}