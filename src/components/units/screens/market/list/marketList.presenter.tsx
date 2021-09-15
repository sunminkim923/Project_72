import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  Container,
  ContentsWrapper,
  ImageWrapper,
  ItemAddress,
  ItemLike,
  ItemPrice,
  ItemTitle,
  Wrapper,
  WriteButton,
  ButtonWrapper,
} from './marketList.style';
import Icon from 'react-native-vector-icons/Ionicons';
const MarketListUI = (props) => {
  const state = {
    data: props.data?.fetchUseditems,
  };
  console.log(state);
  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item._id}
      onPress={() => {
        props.navigation.navigate('Detail', {item});
      }}>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <ContentsWrapper>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemAddress>
            {item.useditemAddress?.address}
            {item.useditemAddress?.addressDetail}
          </ItemAddress>
          <ItemPrice>{item.price}원</ItemPrice>
          <ItemLike>좋아요</ItemLike>
        </ContentsWrapper>
      </Wrapper>
    </TouchableOpacity>
  );

  console.log(props.hasMore);

  return (
    <>
      <Container>
        <FlatList
          data={state.data}
          renderItem={renderItem}
          onEndReached={props.hasMore && props.onLoadMore}
          onEndReachedThreshold={1}
        />
        {/* {props.data?.fetchUseditems.map((data, index) => (
          <TouchableOpacity
            key={data._id + index}
            onPress={() => {
              props.navigation.navigate('Detail');
            }}>
            <Wrapper>
              <ImageWrapper></ImageWrapper>
              <ContentsWrapper>
                <ItemTitle>{data.name}</ItemTitle>
                <ItemAddress>
                  {data.useditemAddress?.address}
                  {data.useditemAddress?.addressDetail}
                </ItemAddress>
                <ItemPrice>{data.price}원</ItemPrice>
                <ItemLike>좋아요</ItemLike>
              </ContentsWrapper>
            </Wrapper>
          </TouchableOpacity>
        ))} */}
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
export default MarketListUI;
