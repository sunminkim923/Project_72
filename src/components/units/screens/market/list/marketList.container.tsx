import {useQuery} from '@apollo/client';
import React from 'react';
import MarketListUI from './marketList.presenter';
import {FETCH_USED_ITEMS} from './marketList.queries';

const MarketList = (props: any) => {
  const {data} = useQuery(FETCH_USED_ITEMS);

  return <MarketListUI navigation={props.navigation} data={data} />;
};
export default MarketList;
