import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import UsersList from './UsersList';

import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faAt);
library.add(faPhone);
library.add(faUser);
library.add(faUserFriends);
library.add(faIgloo);

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="App">
      <Router>
          <Navbar color="dark" dark className="fixed-top">
            <NavbarBrand href="/" className="mr-auto">Address Book</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to="/" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/users" className="nav-link">Users</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
      </Router>   
      </div>
    );
  }
}

function Home({ match }) {
  return (
    <div className="App-container">
      <Link to={`${match.url}users`}>
        <FontAwesomeIcon icon="user-friends" /> Go to Users list
      </Link>
    </div>
  );
}
function Users() {
  return (
    <div className="App-container">
      <Link to="/">
        <FontAwesomeIcon icon="igloo" /> Back to Home
      </Link>
      <UsersList />
    </div>
  );
}

export default App;
