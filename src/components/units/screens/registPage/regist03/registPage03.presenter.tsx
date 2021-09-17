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
import Uploads02 from '../../../../commons/uploads/02/uploads02.container';

const Regist03UI = (props: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>대표 사진을 등록해주세요</Title>
          </TitleWrapper>
          <Uploads02 setImage={props.setImage} />
          <ButtonWrapper>
            <SubmitButton
              onPress={() => {
                props.onUpdatePetInfo();
              }}>
              <ButtonText>다 음</ButtonText>
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Regist03UI;
