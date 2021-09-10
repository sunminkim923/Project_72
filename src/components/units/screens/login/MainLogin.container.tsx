import MainLoginPageUi from './MainLogin.presenter';

import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import MainBottomTabNavigationPage from '../../../../../pages/navigation/MainBottomTabNavigation';

const MainLoginPage = () => {
  const {userInfo, setUserInfo} = useContext(GlobalContext);
  const [loggedIn, setLoggedIn] = useState(false);
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

  const onAuthStateChanged = (user) => {
    setUserInfo(user);
    if (loggedIn) setLoggedIn(true);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loggedIn) return null;
  if (!userInfo) {
    return (
      <MainLoginPageUi
        control={control}
        // register={register}
        loggedIn={loggedIn}
        handleSubmit={handleSubmit}
      />
    );
  }
  return <MainBottomTabNavigationPage />;
};
export default MainLoginPage;
