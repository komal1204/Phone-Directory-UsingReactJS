import React, { Component } from 'react';
import Header from "./Header";
import './App.css';
class App extends Component {
  render() {
    //let x=10;
    return (
      // <div>
      //     <Header></Header>
      // <button>Add</button>
      // <div>
      //   <span>Name</span><br/>
      //   <span>Phone</span>
      //  {/* <span>{x*2}</span> */}
      // </div>
      // {/* <label htmlFor="name">Name</label>
      // <input id = "name" type="text" placeholder="type Here" defaultValue="Komal"></input> */}
      // </div>
      <div>
        <Header></Header>
        <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
