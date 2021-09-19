import React from 'react';
import Comments from '../../../src/components/units/screens/comment/comments.container';
const CommentsPage = (props: any) => {
  const BoardId = props.route.params.item._id;

  return (
    <Comments
      BoardId={BoardId}
      setCommentCount={props.route.params.setCommentCount}
      commentsData={props.route.params.commentsData}
      DataId={props.route.params.setBoardDataId}
    />
  );
};
export default CommentsPage;
