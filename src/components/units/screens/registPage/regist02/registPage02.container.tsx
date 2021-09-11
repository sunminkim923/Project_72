import React, {useState} from 'react';
import Regist02UI from './registPage02.presenter';
const Regist02 = (props: any) => {
  const [selectedValue, setSelectedValue] = useState('리트리버');
  return (
    <Regist02UI
      navigation={props.navigation}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};
export default Regist02;
