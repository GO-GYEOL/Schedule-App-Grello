import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { setPosts } from "../api/apis";
import BoardsContainer from "../containers/BoardsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { getPostsFn } from "../redux/module";
import { store } from "../redux/store";

const HomePage = (props) => {
  const postsData = useSelector((state) => state.postsReducer.posts.data);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { roomId } = useParams();
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
    dispatch(getPostsFn(roomId));
  }, []);

  // 데이터 서버에 업데이트
  store.subscribe(() => {
    if (store.getState().postsReducer.posts.data == null) return;
    setPosts(store.getState().postsReducer.posts.data, roomId);
    // console.log(store.getState().postsReducer.posts.data);
  });
  // room 만들 때 데이터에 roomId를 추가해놓고, api를 통해 파베로부터 데이터를 가져올 때, roomId값도 함께 가져온다. 그 id에 subscribe를 하면 된다. 오 굿. 최선인가.

  if (!postsData)
    return (
      <BackWrapper>
        해당 보드는 존재하지 않습니다. 돌아가서 새로운 보드를 만들어주세요
      </BackWrapper>
    );
  return (
    <Wrapper
      bgc={postsData ? postsData.backgroundColor : null}
      url={postsData ? postsData.backgroundUrl : null}
    >
      <div style={{height:"100%"}}>
        <HeaderContainer userData={userData} />
        <BoardsContainer postsData={postsData} dispatch={dispatch} />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.bgc ? props.bgc : null)};
  background-image: url(${(props) => (props.url ? props.url : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
