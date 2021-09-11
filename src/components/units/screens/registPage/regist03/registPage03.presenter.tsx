import React from 'react';
import {
  ButtonText,
  ButtonWrapper,
  Container,
  SubmitButton,
  AddImageButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './registPage03.style';
import Icon from 'react-native-vector-icons/Ionicons';
const Regist03UI = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>@@의 대표 사진을 등록해주세요</Title>
          </TitleWrapper>
          <AddImageButton>
            <Icon size={60} color={'#aaa'} name="md-add-sharp" />
          </AddImageButton>
          <ButtonWrapper>
            <SubmitButton>
              <ButtonText>다 음</ButtonText>
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Regist03UI;
