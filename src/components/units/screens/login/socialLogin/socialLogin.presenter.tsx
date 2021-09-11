import * as React from 'react';
import {Wrapper} from './socialLogin.style';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native';

const SocialLoginUi = (props: any) => {
  return (
    <Wrapper>
      <GoogleSigninButton
        style={{height: 45, backgroundColor: 'red', borderTopLeftRadius: 100}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={props.onGoogleLogin}
      />
      {props.loggedIn && (
        <Button onPress={props.onGoogleLogout} title="logout" color="#bdbdbd" />
      )}
    </Wrapper>
  );
};
export default SocialLoginUi;
