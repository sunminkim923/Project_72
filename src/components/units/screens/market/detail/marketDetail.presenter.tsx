import React from 'react';
import {
  ButtonText,
  ChatButton,
  Container,
  ItemContents,
  ItemCreatedAt,
  ItemImage,
  ItemInfoWrapper,
  ItemTitle,
  UserAddress,
  UserImage,
  UserInfoLeftContents,
  UserInfoRightContents,
  UserInfoWrapper,
  UserLikeCount,
  UserLikeLogo,
  UserName,
  UserWrapper,
  Wrapper,
  DeleteButton,
  EditButton,
  EtcButtonWrapper,
} from './marketDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
const MarketDetailUI = () => {
  return (
    <>
      <Container>
        <ItemImage />
        <Wrapper>
          <UserWrapper>
            <UserImage>
              <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" />
            </UserImage>
            <UserInfoWrapper>
              <UserInfoLeftContents>
                <UserName>유저이름</UserName>
                <UserAddress>설정주소</UserAddress>
              </UserInfoLeftContents>
              <UserInfoRightContents>
                <UserLikeCount>12</UserLikeCount>
                <UserLikeLogo>
                  <Icon size={40} color={'#26EBA6'} name="md-paw" />
                </UserLikeLogo>
              </UserInfoRightContents>
            </UserInfoWrapper>
          </UserWrapper>
          <ItemInfoWrapper>
            <ItemTitle>상품 이름</ItemTitle>
            <ItemCreatedAt>등록 시간</ItemCreatedAt>
            <ItemContents>상품 상세설명</ItemContents>
          </ItemInfoWrapper>

          <ChatButton>
            <>
              <Icon size={30} color={'#fff'} name="md-chatbubble-ellipses" />
              <ButtonText>채팅으로 거래신청</ButtonText>
            </>
          </ChatButton>

          {/* 조건부로 작성자가 본인 작성글 띄웠을때만 보여주는 버튼 */}
          {/* <EtcButtonWrapper>
            <EditButton>
              <>
                <Icon size={20} color={'#fff'} name="pencil" />
                <ButtonText>수정</ButtonText>
              </>
            </EditButton>
            <DeleteButton>
              <>
                <Icon size={20} color={'#fff'} name="md-close" />
                <ButtonText>삭제</ButtonText>
              </>
            </DeleteButton>
          </EtcButtonWrapper> */}
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketDetailUI;
