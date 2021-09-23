import {useQuery} from '@apollo/client';
import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../../../../../App';
import BoardListUI from './boardList.presenter';
import {FETCH_BOARDS} from './boardList.queries';
const BoardList = (props: any) => {
  const [hasMore, setHasMore] = useState(true);
  const {userInfo} = useContext(GlobalContext);

  const {data, fetchMore} = useQuery(FETCH_BOARDS);

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
    />
  );
};
export default BoardList;
