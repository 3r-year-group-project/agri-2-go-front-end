import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import axios from 'axios';
// my API url
axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // for all requests

const root = ReactDOM.createRoot(document.getElementById('root'));


const domain = "dev-aggfkxjn.us.auth0.com";
    const clientId = "2QzYXflOeArvH1hkfBcOcCA4X02m7yW9";
    const audience = "agrigo"
    const scope = "openid profile email";

    const onRedirectCallback = appState => {
        window.history.replaceState(
          {},
          document.title,
          appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
        );
      };


root.render(
<React.StrictMode>
<Auth0Provider
domain={domain}
clientId={clientId}
audience={audience}
scope={scope}
redirectUri={window.location.origin}
onRedirectCallback={onRedirectCallback}
useRefreshTokens
cacheLocation='localstorage'
  >
    <App />
  </Auth0Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
