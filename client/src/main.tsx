import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-swlebx83ao2ag3k1.us.auth0.com"
      clientId="3vuyy8FhZ6yqoR74jrlzKpow588QzOiT"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>
);
