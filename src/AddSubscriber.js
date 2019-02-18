import React, {Component} from 'react';
import Header from "./Header";
import './AddSubscriber.css'
class AddSubsriber extends Component {
    render() {
        return(
            <div>
                <Header heading = "Add Subscriber"></Header>
                <div className = "component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor ="name" 
                        className="label-control">Name: </label><br/>
                        <input id="name" type = "text" className="input-control"></input><br/>
                        <br/>
                        <label htmlFor="phone" className="label-control">Phone: </label><br/>
                        <input id="phone" type="text" className="input-control" name="phone"></input><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                            <span className="susbscriber-info">Name: </span><br/>
                            <span className="susbscriber-info">Phone: </span><br/>
                        </div>
                        <button type = "submit" className= "custom-btn add-btn">ADD</button>
                    </form>

                </div>
            </div>
        )
    }
}
export default AddSubsriber;