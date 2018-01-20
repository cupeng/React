import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import { Link } from 'react-router-dom';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const Hard = <HardwareVideogameAsset />;

const home = <ActionHome />
const styles = {
  position : 'fixed',
  bottom : 0,
  left : 0
}

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1} style={styles}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to="/">
            <BottomNavigationItem
              label="home"
              icon={home}
              onClick={() => this.select(0)}
            />
          </Link>
          <Link to="/About">
            <BottomNavigationItem
              label="About"
              icon={Hard}
              onClick={() => this.select(1)}
            />
          </Link>
          <Link to="/News">
            <BottomNavigationItem
              label="News"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;