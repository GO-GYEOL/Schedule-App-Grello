import React from "react";
import Header from "../components/Header";
import AddBoardContainer from "./AddBoardContainer";

const HeaderContainer = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <AddBoardContainer />
    </>
  );
};

export default HeaderContainer;
