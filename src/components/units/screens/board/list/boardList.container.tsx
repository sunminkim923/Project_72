import {useQuery} from '@apollo/client';
import React from 'react';
import {useState} from 'react';
import BoardListUI from './boardList.presenter';
import {FETCH_BOARD, FETCH_BOARDS} from './boardList.queries';
const BoardList = (props: any) => {
  // const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const {data} = useQuery(FETCH_BOARD);
  const {data: datas, refetch} = useQuery(FETCH_BOARDS, {
    variables: {page: page},
  });

  console.log(data, 'date');

  // const onPressDetail = (event: any) => {

  //   // props.navigation.navigate();
  //   // console.log(event.traget, 'event');
  // };

  return (
    <BoardListUI
      data={data}
      datas={datas}
      refetch={refetch}
      setPage={setPage}
      navigation={props.navigation}
      // onPressDetail={onPressDetail}
    />
  );
};
export default BoardList;
