import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AddSubscriber from './AddSubscriber';
import * as serviceWorker from './serviceWorker';
import ShowSubscribers from './ShowSubscribers.js'
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';
ReactDOM.render(<PhoneDirectory/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
