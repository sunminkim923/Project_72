import React from 'react';
import Comments from '../../../src/components/units/screens/comment/comments.container';
const CommentsPage = (props: any) => {
  const BoardId = props.route.params.item._id;
  console.log('ddddddd', props);
  return (
    <Comments
      BoardId={BoardId}
      setCommentCount={props.route.params.setCommentCount}
    />
  );
};
export default CommentsPage;
