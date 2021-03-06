import React from 'react';
import {StrictMode} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
    <App/>
          </Provider>
  </StrictMode>,
    rootElement
);

