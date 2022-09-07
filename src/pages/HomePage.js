import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoardsContainer from "../containers/BoardsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { getPostsFn } from "../redux/module";

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

  useEffect(() => {
    dispatch(getPostsFn());
  }, []);
  const postsData = useSelector((state) => state.postsReducer.posts.data);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <HeaderContainer userData={userData} />
      <BoardsContainer data={postsData} dispatch={dispatch} />
    </div>
  );
};

export default HomePage;
