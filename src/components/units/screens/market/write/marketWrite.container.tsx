// import {useMutation} from '@apollo/client';
import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Alert} from 'react-native';
import MarketWriteUI from './marketWrite.presenter';
import {CREATE_USED_ITEM} from './marketWrite.queries';
import {schema} from './marketWrite.validation';

const MarketWrite = () => {
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
            useditemAddress: {
              address: data.address,
            },
            contents: data.contents,
          },
        },
      });
      console.log('성공');
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
