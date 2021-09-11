import MainLoginUi from './MainLogin.presenter';

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
// import auth from '@react-native-firebase/auth';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import MainBottomTabNavigationPage from '../../../../../pages/navigation/MainBottomTabNavigation';
import {useApolloClient, useMutation} from '@apollo/client';
import {
  FETCH_USER_LOGGED_IN,
  LOGIN_USER,
  LOGIN_USER_WITH_FB,
} from './MainLogin.queries';
import {Alert} from 'react-native';

const MainLogin = (props: any) => {
  const {userInfo, setUserInfo} = useContext(GlobalContext);
  const client = useApolloClient();
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER); // 일반 로그인
  const [loginUserWithFB] = useMutation(LOGIN_USER_WITH_FB); // 소셜 로그인

  const onAppLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {email: data.email, password: data.password},
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn, 'asdf');
      Alert.alert('로그인 완료');
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    },
  });

  // const onAuthStateChanged = (user) => {
  //   setUserInfo(user);
  //   if (loggedIn) setLoggedIn(true);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  if (loggedIn) return null;
  if (!userInfo) {
    return (
      <MainLoginUi
        navigation={props.navigation}
        onAppLogin={onAppLogin}
        control={control}
        loggedIn={loggedIn}
        handleSubmit={handleSubmit}
      />
    );
  }
  return <MainBottomTabNavigationPage />;
};
export default MainLogin;
