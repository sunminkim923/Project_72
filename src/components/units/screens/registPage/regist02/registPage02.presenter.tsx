import React from 'react';
import {Picker} from 'react-native';

import {
  AgeInput,
  ButtonText,
  ButtonWrapper,
  Container,
  FemaleButton,
  GenderWrapper,
  InputLabel,
  InputWrapper,
  MaleButton,
  SubmitButton,
  Title,
  TitleWrapper,
  Wrapper,
  Kinds,
} from './registPage02.style';
import Icon from 'react-native-vector-icons/Ionicons';
const Regist02UI = (props: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>@@에 대해서 더 알려주세요</Title>
          </TitleWrapper>
          <InputWrapper>
            <InputLabel>성별</InputLabel>
            <GenderWrapper>
              <MaleButton>
                <Icon size={60} color={'#26eba6'} name="male" />
              </MaleButton>
              <FemaleButton>
                <Icon size={60} color={'#26eba6'} name="female" />
              </FemaleButton>
            </GenderWrapper>
            <InputLabel>견종</InputLabel>
            <Kinds
              selectedValue={props.selectedValue}
              onValueChange={(itemValue) => props.setSelectedValue(itemValue)}>
              <Picker.Item label="리트리버" value="리트리버" />
              <Picker.Item label="웰시코기" value="웰시코기" />
              <Picker.Item label="치와와" value="치와와" />
            </Kinds>
            <InputLabel>나이</InputLabel>
            <AgeInput placeholder="나이를 입력해주세요" />
          </InputWrapper>
          <ButtonWrapper>
            <SubmitButton>
              <ButtonText
                onPress={() => {
                  props.navigation.navigate('Regist03');
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
export default Regist02UI;
