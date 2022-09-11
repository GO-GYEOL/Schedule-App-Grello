import React from "react";
import Header from "../components/Header";
import AddBoardContainer from "./AddBoardContainer";

const HeaderContainer = ({ userData }) => {
  return (
    <>
      <Header userData={userData} />
      <AddBoardContainer />
      <button></button>
    </>
  );
};

export default HeaderContainer;
