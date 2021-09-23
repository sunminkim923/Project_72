import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  BoardComments,
  BoardContentsText,
  BoardContentsWrapper,
  CommentsText,
  CommentsUserImage,
  CommentsWrapper,
  Container,
  CreatedAt,
  ImageWrapper,
  ImageDefault,
  LikeText,
  MoreButton,
  NewCommentsText,
  NewCommentsWrapper,
  UserImage,
  UserInfoLeftContents,
  UserInfoRightContents,
  UserInfoWrapper,
  UserName,
  UserWrapper,
  Wrapper,
  WriteButton,
  ButtonWrapper,
} from './boardList.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../../../../commons/utils';

const BoardListUI = (props: any) => {
  const state = {
    data: props.data?.fetchBoards,
  };
  const renderItem = ({item}: any) => (
    <Wrapper key={uuidv4()}>
      <UserWrapper>
        <UserImage>
          <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" />
        </UserImage>
        <UserInfoWrapper>
          <UserInfoLeftContents>
            <UserName>{item.writer}</UserName>
            <CreatedAt>{getDate(item.createdAt)}</CreatedAt>
          </UserInfoLeftContents>
          <UserInfoRightContents>
            <MoreButton>
              <Icon size={30} color={'#C4C4C4'} name="ellipsis-horizontal" />
            </MoreButton>
          </UserInfoRightContents>
        </UserInfoWrapper>
      </UserWrapper>
      {item.images?.[0] ? (
        <ImageWrapper
          source={{uri: `https://storage.googleapis.com/${item.images?.[0]}`}}
        />
      ) : (
        <ImageDefault>
          <Icon size={40} color={'#fff'} name="close-outline" />
        </ImageDefault>
      )}
      <BoardContentsWrapper>
        <BoardContentsText>{item.contents}</BoardContentsText>
      </BoardContentsWrapper>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Comments', {
            item,
            commentsData: props.commentsData,
            setBoardDataId: props.setBoardDataId,
            setCommentCount: props.setCommentCount,
          });
        }}>
        <CommentsWrapper>
          <BoardComments>
            <CommentsText>댓글 {props.commentCount}개 모두보기</CommentsText>
          </BoardComments>
          <NewCommentsWrapper>
            <CommentsUserImage>
              <Icon size={30} color={'#bdbdbd'} name="person-circle-sharp" />
            </CommentsUserImage>
            <NewCommentsText>댓글 달기 ...</NewCommentsText>
          </NewCommentsWrapper>
        </CommentsWrapper>
      </TouchableOpacity>
    </Wrapper>
  );
  return (
    <>
      <Container>
        <FlatList
          data={state.data}
          renderItem={renderItem}
          onEndReached={props.hasMore && props.onLoadMore}
          onEndReachedThreshold={1}
        />
      </Container>
      <ButtonWrapper>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Write');
          }}>
          <WriteButton>
            <Icon size={30} color={'#fff'} name="brush" />
          </WriteButton>
        </TouchableOpacity>
      </ButtonWrapper>
    </>
  );
};
export default BoardListUI;
