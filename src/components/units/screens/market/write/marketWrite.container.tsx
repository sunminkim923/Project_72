// import {useMutation} from '@apollo/client';
import {useMutation} from '@apollo/client';
import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Alert} from 'react-native';
import MarketWriteUI from './marketWrite.presenter';
import {CREATE_USED_ITEM} from './marketWrite.queries';
import {schema} from './marketWrite.validation';
import {GlobalContext} from '../../../../../../App';

const MarketWrite = (props) => {
  const {userInfo,accessToken} = useContext(GlobalContext);
  console.log(userInfo);
  console.log("토큰 : ",accessToken);
  // const {userInfo} = useContext()
  // console.log()
  const [modalVisible, setModalVisible] = useState(false);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      price: '',
      contents: '',
    },
  });
  const openModal = () => {
    setModalVisible(true);
  };
  const onSubmit = async (data) => {
    console.log('data:', data);
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            price: data.price,
            contents: data.contents,
            remarks: 'UsedItmes',
            // useditemAddress: {
            //   address: data.address,
            // },
          },
        },
      });
      console.log('성공');
      props.navigation.navigate('List')
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <MarketWriteUI
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={formState.errors}
      modalVisible={modalVisible}
      openModal={openModal}
      setModalVisible={setModalVisible}
    />
  );
};
export default MarketWrite;
