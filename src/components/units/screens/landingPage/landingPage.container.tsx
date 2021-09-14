import React from 'react';
import LandingUI from './landingPage.presenter';
const Landing = (props) => {
  return <LandingUI setIsLoading={props.setIsLoading} />;
};
export default Landing;
