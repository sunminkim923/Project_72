import * as React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';
import {useState, createContext} from 'react';
import StartPageStackNavigationPage from './pages/navigation/StartPageStackNavigation';
import {createUploadLink} from 'apollo-upload-client';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext({});

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (AsyncStorage.getItem('accessToken')) {
      setAccessToken(accessToken);
    }
    if (AsyncStorage.getItem('userInfo')) {
      setUserInfo(AsyncStorage.getItem('userInfo'));
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: 'http://34.68.72.16:4000/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
      // ${(typeof window !== 'undefined' && localStorage.getItem('accessToken'))||''}
    },
    credentials: 'include',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  const value = {
    accessToken: accessToken,
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
