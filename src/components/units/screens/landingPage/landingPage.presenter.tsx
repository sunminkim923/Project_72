import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {Container, Wrapper} from './landingPage.style';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};
export default () => {
  return (
    <Container>
      <FadeInView>
        <Wrapper source={require('../../../../imgs/landing.png')} />
      </FadeInView>
    </Container>
  );
};
