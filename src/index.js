import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

//import { incrementNumber } from './actions'; 
import allReducers from './reducers'; 

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

store.subscribe(() => console.log('store', store.getState())); 

//store.dispatch(incrementNumber(store.getState));

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,  
document.getElementById('root'));
registerServiceWorker();
