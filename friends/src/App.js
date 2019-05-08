import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friendsList: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.friendsList.map(pal => (
          <p key={pal.id}>{pal.name}</p>
        ))}
      </div>
    );
  }
}

export default App;