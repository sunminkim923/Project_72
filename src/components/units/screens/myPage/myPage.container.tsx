import {useApolloClient, useMutation} from '@apollo/client';
import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import MyPageUI from './myPage.presenter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const MyPage = () => {
  const client = useApolloClient();
  const {setAccessToken, setUserInfo} = useContext(GlobalContext);

  const onPressLogout = async () => {
    try {
      await client.clearStore();
      if (setAccessToken) setAccessToken('');
      if (setUserInfo) setUserInfo(undefined);
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('userInfo');
      Alert.alert('로그아웃');
    } catch (error) {
      console.log(error.message);
    }
  };

  return <MyPageUI onPressLogout={onPressLogout} />;
};
export default MyPage;
