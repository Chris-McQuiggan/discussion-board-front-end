import React from 'react';
import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} inNavbar='true' direction='left'>
          <DropdownToggle nav caret>
            Sign Up
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              __________________________________________________
            </DropdownItem>

            <Form inline onSubmit={this.props.newUser}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleUsername" className="mr-sm-2"> Username</Label>
                <Input type="username" name="username" id="exampleUsername" placeholder="username" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
              <Button>Submit</Button>
            </Form>

          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}