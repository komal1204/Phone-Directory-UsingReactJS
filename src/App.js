import React, { Component } from 'react';
import Header from "./Header";
import './App.css';
class App extends Component {
  render() {
    //let x=10;
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];
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
          
          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
         
          </div>
        </div>
        );
      }
    }
    
    export default App;
