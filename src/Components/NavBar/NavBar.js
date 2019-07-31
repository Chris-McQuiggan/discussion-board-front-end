import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 
  import 'bootstrap/dist/css/bootstrap.css';
  import Login from './User/Login';
  import SignUp from './User/SignUp';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Discussion Board</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Login logIn={this.props.logIn} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><SignUp newUser={this.props.newUser} /></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
