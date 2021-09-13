import * as React from 'react';
import {Wrapper} from './socialLogin.style';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const SocialLoginUi = (props: any) => {
  return (
    <Wrapper>
      <GoogleSigninButton
        style={{height: 45}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={props.onGoogleLogin}
      />
    </Wrapper>
  );
};
export default SocialLoginUi;
