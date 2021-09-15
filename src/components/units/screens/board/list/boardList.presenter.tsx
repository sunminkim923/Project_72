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
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../../../../commons/utils';

const BoardListUI = (props: any) => {
  return (
    <>
      <Container>
        {props.datas?.fetchBoards.map((data: any) => (
          <Wrapper key={uuidv4()}>
            <UserWrapper>
              <UserImage>
                <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" />
              </UserImage>
              <UserInfoWrapper>
                <UserInfoLeftContents>
                  <UserName>{data.writer}</UserName>
                  <CreatedAt>{getDate(data.createdAt)}</CreatedAt>
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
              <BoardContentsText>{data.contents}</BoardContentsText>
            </BoardContentsWrapper>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Comments');
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
        ))}
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
