import React from 'react';
import './Header.css'
const Header = function(props){
    
    return(
        <div className="header">
        {props.heading}
      </div>
    )
}

// class Header extends Component{
//     render(){
//         <div className="header">
//                  Phone Directory
//                </div>
//     }
// }

export default Header;