import React from 'react';
import {
  ChatContents,
  Container,
  ListItemInfoWrapper,
  ListItemLeftWrapper,
  ListItemRightWrapper,
  ListItemWrapper,
  MessageCount,
  Title,
  TitleWrapper,
  UserImage,
  UserName,
  Wrapper,
} from './chatList.stye';
import Icon from 'react-native-vector-icons/Ionicons';
const ChatListUI = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>채팅</Title>
          </TitleWrapper>

          <ListItemWrapper>
            <UserImage>
              <Icon size={55} color={'#bdbdbd'} name="person-circle-sharp" />
            </UserImage>
            <ListItemInfoWrapper>
              <ListItemLeftWrapper>
                <UserName>유저이름</UserName>
                <ChatContents>메세지 내용</ChatContents>
              </ListItemLeftWrapper>
              <ListItemRightWrapper>
                <MessageCount>N</MessageCount>
              </ListItemRightWrapper>
            </ListItemInfoWrapper>
          </ListItemWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default ChatListUI;
