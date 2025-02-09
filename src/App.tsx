import AppProvidersWrapper from "./components/wrappers/AppProvidersWrapper"
import configureFakeBackend from "./helpers/fake-backend"
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AppRouter from "./routes/router"
import config from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import "./assets/scss/style.scss"
import { Amplify } from "aws-amplify";

configureFakeBackend()
Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <AppProvidersWrapper>
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign out</button>
      <AppRouter />
    </AppProvidersWrapper>
  )
}

const AppWithAuthenticator = withAuthenticator(App);
export default AppWithAuthenticator;
