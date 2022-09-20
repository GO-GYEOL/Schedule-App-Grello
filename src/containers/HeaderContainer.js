import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AddBoardContainer from "./AddBoardContainer";
import ChangeBackground from "./ChangeBackground";

const HeaderContainer = ({ userData }) => {
  return (
    <Wrapper>
      <Header userData={userData} />
      <SmallWrapper>
        <AddBoardContainer />
        <ChangeBackground />
      </SmallWrapper>
    </Wrapper>
  );
};

export default HeaderContainer;

const Wrapper = styled.div`
  width: 100%;
`;
const SmallWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
