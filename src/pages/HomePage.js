import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardsContainer from "../containers/BoardsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { getPostsFn } from "../redux/module";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.bgc ? props.bgc : null)};
  background-image: url(${(props) => (props.url ? props.url : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
`;

const HomePage = (props) => {
  const postsData = useSelector((state) => state.postsReducer.posts.data);
  // console.log(postsData);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
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

  return (
    <Wrapper
      bgc={postsData ? postsData.backgroundColor : null}
      url={postsData ? postsData.backgroundUrl : null}
    >
      <HeaderContainer userData={userData} />
      <BoardsContainer postsData={postsData} dispatch={dispatch} />
    </Wrapper>
  );
};

export default HomePage;
