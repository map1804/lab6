import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore } from "redux";
// import reducers from "./reducers/indexReducer.js"; //reducer thay đổi store
import reducers from './reducers/indexReducer.js'
const store = createStore(reducers); //Tạo store


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
console.log("Xem store:", store.getState());
reportWebVitals();
