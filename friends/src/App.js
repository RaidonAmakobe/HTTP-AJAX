import REact, { Component } from 'react';
import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }
}

componentDidMount() {
  axios
  .get("http://localhost:5000/friends")
  .then(res => this.setState({ friendsList: res.data})
  .catch(err => console.log(err));
  )
}

export default App;
