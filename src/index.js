import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {Auth0ProviderWithHistory} from "./services/utils/Auth0ProviderWithHistory";
import axios from 'axios';
// my API url
axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // for all requests

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <Auth0ProviderWithHistory>
    <App/>
  </Auth0ProviderWithHistory>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
