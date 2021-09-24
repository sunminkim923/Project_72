import {useMutation, useQuery} from '@apollo/client';
import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {GlobalContext} from '../../../../../../App';
import BoardListUI from './boardList.presenter';
import {DELETE_BOARD, FETCH_BOARDS} from './boardList.queries';

const BoardList = (props: any) => {
  const [hasMore, setHasMore] = useState(true);
  const {userInfo} = useContext(GlobalContext);

  const [boardListId, setBoardListId] = useState('');

  const {data, fetchMore} = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onPressDeleteBoard = async (boardId: string) => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        refetchQueries: [{query: FETCH_BOARDS}],
      });
      Alert.alert('삭제');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLoadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchBoards.length) {
          setHasMore(false);
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <BoardListUI
      data={data}
      userInfo={userInfo}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      navigation={props.navigation}
      setBoardListId={setBoardListId}
      onPressDeleteBoard={onPressDeleteBoard}
    />
  );
};
export default BoardList;
