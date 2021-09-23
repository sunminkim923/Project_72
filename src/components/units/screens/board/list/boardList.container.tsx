import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {useEffect} from 'react';
import BoardListUI from './boardList.presenter';
import {FETCH_BOARDS, FETCH_BOARD_COMMENTS} from './boardList.queries';
const BoardList = (props: any) => {
  const [hasMore, setHasMore] = useState(true);
  const [BoardDataId, setBoardDataId] = useState();

  const {data, fetchMore, refetch} = useQuery(FETCH_BOARDS);
  const {data: commentsData} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId: BoardDataId},
  });

  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('Refreshed!');
      refetch();
    });
    return unsubscribe;
  }, [props.navigation, refetch]);

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
      commentsData={commentsData}
      setBoardDataId={setBoardDataId}
      commentCount={commentCount}
      setCommentCount={setCommentCount}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      navigation={props.navigation}
    />
  );
};
export default BoardList;
