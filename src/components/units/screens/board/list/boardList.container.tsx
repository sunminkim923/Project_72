import {useQuery} from '@apollo/client';
import React from 'react';
import {useState} from 'react';
import BoardListUI from './boardList.presenter';
import {FETCH_BOARDS} from './boardList.queries';
const BoardList = (props: any) => {
  // const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const [hasMore, setHasMore] = useState(true);
  const {data, fetchMore} = useQuery(FETCH_BOARDS, {
    variables: {page: page},
  });
  const [commentCount, setCommentCount] = useState(0);

  const onLoadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <BoardListUI
      data={data}
      commentCount={commentCount}
      setCommentCount={setCommentCount}
      hasMore={hasMore}
      setPage={setPage}
      onLoadMore={onLoadMore}
      navigation={props.navigation}
      // onPressDetail={onPressDetail}
    />
  );
};
export default BoardList;
