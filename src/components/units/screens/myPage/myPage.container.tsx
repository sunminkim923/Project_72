import {useApolloClient, useMutation} from '@apollo/client';
import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import MyPageUI from './myPage.presenter';
import {LOGOUT_USER} from './myPage.queries';

const MyPage = () => {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const client = useApolloClient();
  const {setAccessToken, setUserInfo, userInfo} = useContext(GlobalContext);

  const onPressLogout = async () => {
    try {
      console.log(userInfo);
      await logoutUser();
      await client.clearStore();
      if (setAccessToken) setAccessToken('');
      if (setUserInfo) setUserInfo({});
    } catch (error) {
      console.log(error.message);
    }
  };

  return <MyPageUI onPressLogout={onPressLogout} />;
};
export default MyPage;
