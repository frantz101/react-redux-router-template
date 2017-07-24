import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {
    Provider
}
from 'react-redux'

import {
    createStore
}
from 'redux'
import rootReducer from './reducers/index'
import {
    BrowserRouter as Router,
    Route
}
from 'react-router-dom'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}> 
    <Router>
     <Route path='/' component={App}/>
    </Router>
       
   
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
