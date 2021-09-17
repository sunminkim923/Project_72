import {useMutation, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {GlobalContext} from '../../../../../App';
import CommentsUI from './comments.presenter';
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS} from './comments.queries';

const Comments = (props: any) => {
  const {userInfo} = useContext(GlobalContext);
  const {data: commentsData} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId: props.BoardId},
  });
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const {handleSubmit, control} = useForm({defaultValues: {contents: ''}});
  const Count = commentsData?.fetchBoardComments.length;
  useEffect(() => {
    if (commentsData) {
      props.setCommentCount(Count);
    }
  });
  const onCommentSubmit = async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          boardId: props.BoardId,
          createBoardCommentInput: {
            writer: userInfo.name,
            password: userInfo._id,
            contents: data.contents,
            rating: 1,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: props.BoardId,
            },
          },
        ],
      });
      console.log('댓글 등록');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentsUI
      data={commentsData}
      onCommentSubmit={onCommentSubmit}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};
export default Comments;
