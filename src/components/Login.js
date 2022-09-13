import React from "react";
import styled from "styled-components";

const LogIn = ({ onLogin }) => {
  const onClick = (providerName) => {
    onLogin(providerName);
  };
  return (
    <Wrapper>
      <LoginBox>
        <Title>Schedules</Title>
        <LoginBtn onClick={() => onClick("Google")}>
          <Image src="./images/google.svg"></Image>
          Continue with Google
        </LoginBtn>
        <LoginBtn onClick={() => onClick("Github")}>
          <Image src="./images/github.svg"></Image>
          Continue with Github
        </LoginBtn>
        <LoginBtn onClick={() => onClick("Anonymous")}>
          <Image src="./images/user.svg"></Image>
          Continue with Guest
        </LoginBtn>
      </LoginBox>
      <Background />
    </Wrapper>
  );
};

export default LogIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
`;
const LoginBox = styled.div`
  width: 400px;
  padding: 30px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const LoginBtn = styled.div`
  width: 100%;
  height: 35px;
  line-height: 30px;
  text-align: center;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  font-weight: 500;
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  position: relative;
  top: 3px;
`;
const Background = styled.div`
  width: 90%;
  height: 80%;
  background-image: url("./images/subway.jpg");
  background-size: contain;
  background-position: center;
  position: absolute;
  z-index: -1;
`;
