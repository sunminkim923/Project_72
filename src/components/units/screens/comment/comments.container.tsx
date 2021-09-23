import {useMutation, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {GlobalContext} from '../../../../../App';
import CommentsUI from './comments.presenter';
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS} from './comments.queries';

const Comments = (props: any) => {
  const {userInfo} = useContext(GlobalContext);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const {handleSubmit, control} = useForm({defaultValues: {contents: ''}});

  useEffect(() => {
    if (props.BoardId) {
      props.DataId(props.BoardId);
      props.setCommentCount(props.commentsData?.fetchBoardComments.length);
    }
  }, []);
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
      // data={commentsData}
      userInfo={userInfo}
      commentsData={props.commentsData}
      onCommentSubmit={onCommentSubmit}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};
export default Comments;
