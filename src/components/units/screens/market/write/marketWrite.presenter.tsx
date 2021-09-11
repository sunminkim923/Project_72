import React, {useState} from 'react';
import {
  ModalWrapper,
  ModalView,
  AddImage,
  AddImageText,
  AddImageWrapper,
  AddressInput,
  ButtonText,
  Container,
  ContentsInput,
  InputWrapper,
  ErrorText,
  PriceInput,
  SubmitButton,
  Address,
  Title,
  TitleInput,
  TitleWrapper,
  Wrapper,
} from './marketWrite.style';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Controller} from 'react-hook-form';
const MarketWriteUI = (props) => {
  return (
    <>
      <Modal visible={props.modalVisible}>
        <ModalWrapper>
          <ModalView></ModalView>
        </ModalWrapper>
      </Modal>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>상품 등록</Title>
          </TitleWrapper>
          <AddImageWrapper>
            <AddImage>
              <Icon size={60} color={'#fff'} name="md-add-sharp" />
            </AddImage>
            <AddImageText>상품 사진을 첨부해주세요</AddImageText>
          </AddImageWrapper>
          <InputWrapper>
            <Controller
              name="name"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <TitleInput
                    placeholder="상품명을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                  <ErrorText>{props.errors?.name?.message}</ErrorText>
                </>
              )}
            />
            <Controller
              name="price"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <PriceInput
                    placeholder="상품 가격을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />

                  <ErrorText>{props.errors?.price?.message}</ErrorText>
                </>
              )}
            />

            <>
              <AddressInput onPress={props.openModal}>
                <Address>주소를 검색해주세요</Address>
              </AddressInput>
            </>

            <Controller
              name="contents"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <ContentsInput
                    multiline
                    placeholder="내용을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />

                  <ErrorText>{props.errors?.contents?.message}</ErrorText>
                </>
              )}
            />
          </InputWrapper>
          <SubmitButton onPress={props.handleSubmit(props.onSubmit)}>
            <Icon size={30} color={'#fff'} name="md-brush-sharp" />
            <ButtonText>등록하기</ButtonText>
          </SubmitButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketWriteUI;
