import React, { Component } from 'react';
import '../App.css';

console.log(window)

class Home extends Component {
  constructor() {
    super()
    this.state = {
     //
    }
  }

  render() {
    return (
      <div>
          <h1>Home</h1>
          <button onClick={() => {
            window.location.href = '/Map'
          }}>Go to map section</button>
      </div>
    );
  }
}

export default Home;
