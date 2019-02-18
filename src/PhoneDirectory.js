import React , {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubcribers from './ShowSubscribers';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state ={
            subscribersList:[{
                id :1,
                name:"Shilpa Bhat",
                phone:"999999999"
            },
        {
            id:2,
            name:"Shristi Gupta",
            phone:"88888888"
        }]
        }
    }
    addSubscriberHandler = (newSubscriber)=>{
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id = subscribersList[subscribersList.length-1].id+1;

        }
        else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
            <ShowSubcribers subscribersList = {this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;