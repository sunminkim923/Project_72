import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import BoardListUI from './boardList.presenter';
import {FETCH_BOARDS, FETCH_BOARD_COMMENTS} from './boardList.queries';
const BoardList = (props: any) => {
  const [page, setPage] = useState(0);

  const [hasMore, setHasMore] = useState(true);
  const [BoardDataId, setBoardDataId] = useState();

  const {data, fetchMore} = useQuery(FETCH_BOARDS, {
    variables: {page: page},
  });
  const {data: commentsData} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId: BoardDataId},
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
      commentsData={commentsData}
      setBoardDataId={setBoardDataId}
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
