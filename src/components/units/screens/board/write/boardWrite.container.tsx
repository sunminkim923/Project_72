import React from 'react';
import {createContext} from 'react';
import {useForm} from 'react-hook-form';
import BoardWriteUI from './boardWirte.presenter';

export const BoardContext = createContext({});

const BoardWrite = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({mode: 'onChange'});

  return <BoardWriteUI handleSubmit={handleSubmit} control={control} />;
};
export default BoardWrite;
