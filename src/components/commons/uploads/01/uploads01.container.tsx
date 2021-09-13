import React, {useRef} from 'react';
import {useState} from 'react';
import Uploads01UI from './uploads01.presenter';

const Uploads01 = (props: any) => {
  const fileRef = useRef(null);
  const [file, setFile] = useState('');

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFile(data.target?.result);
      props.onChangeFile(file, props.index);
    };
  };
  const onPressUpload = () => {
    fileRef.current?.press();
  };

  return <Uploads01UI />;
};
export default Uploads01;
