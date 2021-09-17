import React, {useContext} from 'react';
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
import {GlobalContext} from '../../../../../../App';
const MarketDetailUI = (props) => {
  const {userInfo} = useContext(GlobalContext);
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
                <UserName>{props.data?.fetchUseditem.seller.name}</UserName>
                <UserAddress style={{fontWeight: 'bold'}}>
                  {props.data?.fetchUseditem.useditemAddress.address}
                </UserAddress>
                <UserAddress numberOfLines={2} ellipsizeMode="tail">
                  {props.data?.fetchUseditem.useditemAddress.addressDetail}
                </UserAddress>
              </UserInfoLeftContents>
              <UserInfoRightContents>
                <UserLikeCount>
                  {props.data?.fetchUseditem.pickedCount}
                </UserLikeCount>
                <UserLikeLogo onPress={props.onPressToggle}>
                  <Icon size={40} color={'#26EBA6'} name="md-paw" />
                </UserLikeLogo>
              </UserInfoRightContents>
            </UserInfoWrapper>
          </UserWrapper>
          <ItemInfoWrapper>
            <ItemTitle>{props.data?.fetchUseditem.name}</ItemTitle>
            <ItemCreatedAt>
              {props.data?.fetchUseditem.createdAt.split('T')[0]}
            </ItemCreatedAt>
            <ItemContents>{props.data?.fetchUseditem.contents}</ItemContents>
          </ItemInfoWrapper>

          {props.data?.fetchUseditem.seller.name === userInfo.name ? (
            <EtcButtonWrapper>
              <EditButton>
                <>
                  <Icon size={20} color={'#fff'} name="pencil" />
                  <ButtonText>수정</ButtonText>
                </>
              </EditButton>
              <DeleteButton onPress={props.onPressDelete}>
                <>
                  <Icon size={20} color={'#fff'} name="md-close" />
                  <ButtonText>삭제</ButtonText>
                </>
              </DeleteButton>
            </EtcButtonWrapper>
          ) : (
            <ChatButton>
              <>
                <Icon size={30} color={'#fff'} name="md-chatbubble-ellipses" />
                <ButtonText>채팅으로 거래신청</ButtonText>
              </>
            </ChatButton>
          )}
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketDetailUI;
