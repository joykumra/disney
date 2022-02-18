import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <LogoOne src="/images/cta-logo-one.svg"></LogoOne>
          <SignUp>Get all there</SignUp>
          <Desc>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Desc>
          <LogoTwo src="/images/cta-logo-two.png"></LogoTwo>
        </CTA>
        <BgImage></BgImage>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  height: 100%;
  z-index: -1;
`;

const CTA = styled.div`
  width: min(100%, 650px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin: 0 auto 2vw;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const LogoOne = styled.img`
  margin-bottom: 12px;
  width: min(100%, 600px);
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  background-color: #0063e5;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  width: 100%;
  margin-bottom: 12px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95%, 1);
  font-size: 12px;
  margin-bottom: 24px;
  line-height: 1.5;
  letter-spacing: 1.3px;
`;

const LogoTwo = styled.img`
  width: min(100%, 600px);
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
