import React, {useState} from 'react';
import Regist02UI from './registPage02.presenter';

const Regist02 = (props: any) => {
  const [petGender, setPetGender] = useState('');
  const [petKinds, setPetKinds] = useState('');

  return (
    <Regist02UI
      petName={props.petName}
      navigation={props.navigation}
      petGender={petGender}
      setPetGender={setPetGender}
      petKinds={petKinds}
      setPetKinds={setPetKinds}
    />
  );
};
export default Regist02;
