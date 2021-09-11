import React from 'react';
import {
  ButtonText,
  Container,
  InputWrapper,
  NameInput,
  ButtonWrapper,
  SubmitButton,
  TitleWrapper,
  Title,
  Wrapper,
} from './registPage01.style';
const Regist01UI = ({navigation}: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>등록할 강아지 이름을 알려주세요</Title>
          </TitleWrapper>
          <InputWrapper>
            <NameInput placeholder="이름을 입력하세요" />
          </InputWrapper>
          <ButtonWrapper>
            <SubmitButton>
              <ButtonText
                onPress={() => {
                  navigation.navigate('Regist02');
                }}>
                다 음
              </ButtonText>
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Regist01UI;
