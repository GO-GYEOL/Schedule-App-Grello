import React, { useState } from "react";
import styled from "styled-components";
import UserPop from "./UserPop";

const Header = ({ userData }) => {
  const [userPopOn, setUserPopOn] = useState();
  const { uid, displayName, photoURL } = userData;
  return (
    <Wrapper>
      <Title>Schedules</Title>
      {/* <UserName>{displayName}</UserName> */}
      <UserImgBox>
        <UserPhoto
          src={photoURL}
          onClick={() => setUserPopOn((prev) => !prev)}
        />
        {userPopOn ? <UserPop /> : null}
      </UserImgBox>
      {/* 이거 클릭하면 로그아웃 팝업 뜨도록 */}
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
  position: relative;
`;
const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 1000;
`;

const UserImgBox = styled.div`
  position: absolute;
  right: 20px;
`;
