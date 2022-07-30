import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore} from 'redux';
import './index.css';
import App from './componenets/App';

import movies from './reducers';
const store = legacy_createStore(movies);
// console.log('store',store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:'superman'}]
// });
// console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


