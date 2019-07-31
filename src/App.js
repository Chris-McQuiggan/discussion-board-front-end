import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './Components/NavBar/NavBar'
import CommentList from './Components/CommentList/CommentList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      email: "",
      data: []
    };

  }

  newUser = (username, email) => {
    // nothing in backend to handle this yet
  }

  logIn = (username, email) => {
    console.log(username);
    console.log(email);
    this.setState({
      username: username,
      email: email
    })
  }

getAll = () => {
  axios.get('http://localhost:5000/items/all')
            .then(response => {  
                this.setState({
                  data: response.data.reverse()
                })
            })
            .catch(error => {console.log(error)})
}

componentDidMount = () => {
this.getAll()
}

  render() {
    return (
      <div className="App">
        <NavBar newUser={this.newUser} logIn={this.logIn} />
        <CommentList username={this.state.username} email={this.state.email} getAll={this.getAll} data={this.state.data} />
      </div>
    );
  }
}

export default App;
