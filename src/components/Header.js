import React from "react";
import styled from "styled-components";

const Header = ({ userData }) => {
  const { uid, displayName, photoURL } = userData;
  return (
    <Wrapper>
      <Title>Schedules</Title>
      {/* <UserName>{displayName}</UserName> */}
      <UserPhoto src={photoURL} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
`;
const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  right: 20px;
`;
const UserName = styled.div`
  line-height: 30px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 1000;
`;
