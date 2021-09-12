import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';
import {useState, createContext} from 'react';
import StartPageStackNavigationPage from './pages/navigation/StartPageStackNavigation';

const client = new ApolloClient({
  uri: 'http://34.68.72.16:4000/graphql',
  // link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
  cache: new InMemoryCache(),
});

export const GlobalContext = createContext({});

function App() {
  const [acessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(false);

  const value = {
    acessToken: acessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  return (
    <>
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          {userInfo ? (
            <>
              <MainBottomTabNavigationPage />
            </>
          ) : (
            <>
              <StartPageStackNavigationPage />
            </>
          )}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
