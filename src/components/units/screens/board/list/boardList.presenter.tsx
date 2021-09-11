import React from 'react';
import {TouchableOpacity} from 'react-native';
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
const BoardListUI = ({navigation}: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <UserWrapper>
            <UserImage>
              <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" />
            </UserImage>
            <UserInfoWrapper>
              <UserInfoLeftContents>
                <UserName>작성자 아이디</UserName>
                <CreatedAt>등록날짜</CreatedAt>
              </UserInfoLeftContents>
              <UserInfoRightContents>
                <MoreButton>
                  <Icon
                    size={30}
                    color={'#C4C4C4'}
                    name="ellipsis-horizontal"
                  />
                </MoreButton>
              </UserInfoRightContents>
            </UserInfoWrapper>
          </UserWrapper>
          <ImageWrapper></ImageWrapper>
          <BoardContentsWrapper>
            <BoardContentsText>게시글 내용</BoardContentsText>
          </BoardContentsWrapper>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Comments');
            }}>
            <CommentsWrapper>
              <BoardComments>
                <CommentsText>댓글 @개 모두보기</CommentsText>
                {/* <LikeText>좋아요 @개</LikeText> */}
              </BoardComments>
              <NewCommentsWrapper>
                <CommentsUserImage>
                  <Icon
                    size={30}
                    color={'#bdbdbd'}
                    name="person-circle-sharp"
                  />
                </CommentsUserImage>
                <NewCommentsText>댓글 달기 ...</NewCommentsText>
              </NewCommentsWrapper>
            </CommentsWrapper>
          </TouchableOpacity>
        </Wrapper>
      </Container>
      <ButtonWrapper>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Write');
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
