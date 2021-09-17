import {useMutation, useQuery} from '@apollo/client';
import React from 'react';
import {Alert} from 'react-native';
import {FETCH_USED_ITEMS} from '../list/marketList.queries';
import MarketDetailUI from './marketDetail.presenter';
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from './marketDetail.queries';

const MarketDetail = (props) => {
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: props.item},
  });
  const onPressToggle = () => {
    toggleUseditemPick({
      variables: {
        useditemId: props.item,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {useditemId: props.item},
        },
      ],
    });
  };
  const onPressDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: props.item,
        },
        refetchQueries: [{query: FETCH_USED_ITEMS}],
      });
      Alert.alert('상품이 정상적으로 삭제되었습니다');
      props.navigation.navigate('List');
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <MarketDetailUI
      data={data}
      onPressToggle={onPressToggle}
      onPressDelete={onPressDelete}
    />
  );
};
export default MarketDetail;
