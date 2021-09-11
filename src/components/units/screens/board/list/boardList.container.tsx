import React from 'react';
import BoardListUI from './boardList.presenter';
const BoardList = (props: any) => {
  return <BoardListUI navigation={props.navigation} />;
};
export default BoardList;
