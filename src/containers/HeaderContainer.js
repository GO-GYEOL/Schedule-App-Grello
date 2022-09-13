import React from "react";
import Header from "../components/Header";
import AddBoardContainer from "./AddBoardContainer";
import BgPopUpContainer from "./BgPopUpContainer";

const HeaderContainer = ({ userData }) => {
  return (
    <>
      <Header userData={userData} />
      <AddBoardContainer />
      <BgPopUpContainer/>
    </>
  );
};

export default HeaderContainer;
