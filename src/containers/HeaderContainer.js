import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AddBoardContainer from "./AddBoardContainer";
import ChangeBackground from "./ChangeBackground";

const HeaderContainer = ({ userData }) => {
  return (
    <>
      <Header userData={userData} />
      <Wrapper>
        <AddBoardContainer />
        <ChangeBackground />
      </Wrapper>
    </>
  );
};

export default HeaderContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
