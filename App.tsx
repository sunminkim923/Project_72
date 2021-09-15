import * as React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';
import {useState, createContext, useEffect} from 'react';
import StartPageStackNavigationPage from './pages/navigation/StartPageStackNavigation';
import {createUploadLink} from 'apollo-upload-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from './pages/screens/landing';

export const GlobalContext = createContext({});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getToken = async () => {
      if (AsyncStorage.getItem('accessToken')) {
        setAccessToken(String(await AsyncStorage.getItem('accessToken')));
      }
      if (AsyncStorage.getItem('userInfo')) {
        setUserInfo(String(await AsyncStorage.getItem('userInfo')));
      }
    };
    getToken();
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
          {
            isLoading && <LandingPage setIsLoading={setIsLoading} />
            //isLoading && fadeinview
          }
          {!isLoading &&
            (userInfo ? (
              <>
                <MainBottomTabNavigationPage />
              </>
            ) : (
              <>
                <StartPageStackNavigationPage />
              </>
            ))}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
