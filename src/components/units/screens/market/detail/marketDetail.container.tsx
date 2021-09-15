import React from 'react';
import MarketDetailUI from './marketDetail.presenter';
const MarketDetail = (props) => {
  return <MarketDetailUI item={props.params} />;
};
export default MarketDetail;
