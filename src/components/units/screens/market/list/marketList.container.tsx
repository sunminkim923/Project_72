import React from 'react';
import MarketListUI from './marketList.presenter';
const MarketList = (props: any) => {
  return <MarketListUI navigation={props.navigation} />;
};
export default MarketList;
