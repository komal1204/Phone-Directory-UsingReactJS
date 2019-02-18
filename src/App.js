import React, { Component } from 'react';
import Header from "./Header"

class App extends Component {
  render() {
    //let x=10;
    return (
      <div>
          <Header></Header>
      <button>Add</button>
      <div>
        <span>Name</span><br/>
        <span>Phone</span>
       {/* <span>{x*2}</span> */}
      </div>
      {/* <label htmlFor="name">Name</label>
      <input id = "name" type="text" placeholder="type Here" defaultValue="Komal"></input> */}
      </div>
    );
  }
}

export default App;
