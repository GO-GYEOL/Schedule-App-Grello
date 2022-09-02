import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoardsContainer from "../containers/BoardsContainer";

const HomePage = (props) => {
  // 로그인 없이 접근 시 로그인페이지로 강제이동
  // const isLoggedIn = useSelector((state) => state.userReducer);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn.uid) {
  //     console.log(isLoggedIn);
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div>
      <BoardsContainer />
    </div>
  );
};

export default HomePage;
