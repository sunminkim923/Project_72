import React from 'react';
import Regist03UI from './registPage03.presenter';
import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../../App';

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      petName
      petGender
      petKinds
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      petName
      petGender
      petKinds
    }
  }
`;

const Regist03 = (props: any) => {
  const {setAccessToken, setUserInfo} = useContext(GlobalContext);
  const [updateUser] = useMutation(UPDATE_USER);
  const {data} = useQuery(FETCH_USER_LOGGED_IN);
  const onUpdatePetInfo = async () => {
    try {
      const updateResult = await updateUser({
        variables: {
          updateUserInput: {
            petName: props.petInfo.petName,
            petGender: props.petInfo.petGender,
            petKinds: props.petInfo.petKinds,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });

      console.log('등록되었습니다.');
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(data.fetchUserLoggedIn) || '',
      );
      setUserInfo(updateResult);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Regist03UI onUpdatePetInfo={onUpdatePetInfo} petInfo={props.petInfo} />
  );
};
export default Regist03;
