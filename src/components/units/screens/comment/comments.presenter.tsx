import React from 'react';
import {
  CommentsContents,
  CommentsCreactedAt,
  CommentsInput,
  CommentsLeftWrapper,
  CommentsRightWrapper,
  CommentsSubmit,
  CommentsUserName,
  CommentsWrapper,
  Container,
  SubmitText,
  Title,
  TitleWrapper,
  UserImage,
  Wrapper,
  WriteCommentWrapper,
  WriteUserImage,
} from './comments.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Controller} from 'react-hook-form';
import {v4 as uuidv4} from 'uuid';
import {FlatList} from 'react-native';
import {getDate} from '../../../commons/utils';

const CommentsUI = (props: any) => {
  const state = {commentDate: props.commentsData?.fetchBoardComments};
  const renderItem = ({item}: any) => (
    <CommentsWrapper key={uuidv4()}>
      <UserImage>
        <Icon size={50} color={'#bdbdbd'} name="person-circle-sharp" />
      </UserImage>
      <CommentsLeftWrapper>
        <CommentsUserName>{item.writer}</CommentsUserName>
        <CommentsCreactedAt>{getDate(item.createdAt)}</CommentsCreactedAt>
      </CommentsLeftWrapper>
      <CommentsRightWrapper>
        <CommentsContents>{item.contents}</CommentsContents>
      </CommentsRightWrapper>
    </CommentsWrapper>
  );
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>댓글</Title>
          </TitleWrapper>

          <FlatList
            data={state.commentDate}
            renderItem={renderItem}
            onEndReached={props.hasMore && props.onLoadMore}
          />
        </Wrapper>
        <WriteCommentWrapper>
          <WriteUserImage>
            <Icon size={50} color={'#bdbdbd'} name="person-circle-sharp" />
          </WriteUserImage>
          <Controller
            control={props.control}
            name="contents"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <CommentsInput
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                multiline
                placeholder="댓글을 입력하세요"
              />
            )}
          />

          <CommentsSubmit onPress={props.handleSubmit(props.onCommentSubmit)}>
            <SubmitText>게시</SubmitText>
          </CommentsSubmit>
        </WriteCommentWrapper>
      </Container>
    </>
  );
};
export default CommentsUI;
