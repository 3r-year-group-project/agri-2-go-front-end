import {AppState, Auth0Provider} from "@auth0/auth0-react";
import React, {PropsWithChildren} from "react";
// import {useNavigate} from "react-router-dom";

export const Auth0ProviderWithHistory = ({children})=>{
    // const navigate = useNavigate();
    const domain = "dev-aggfkxjn.us.auth0.com";
    const clientId = "2QzYXflOeArvH1hkfBcOcCA4X02m7yW9";
    const audience = "learning"
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

    if (!(domain && clientId && audience)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            // audience={audience}
            scope={scope}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens
            cacheLocation='localstorage'
        >
            {children}
        </Auth0Provider>
    );
};