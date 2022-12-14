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
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.uid) {
      navigate("/");
    }
  }, [userData]);
  
  useEffect(() => {
    dispatch(getPostsFn(roomId));
  }, []);

  // 데이터 서버에 업데이트
  store.subscribe(() => {
    if (store.getState().postsReducer.posts.data == null) return;
    setPosts(store.getState().postsReducer.posts.data, roomId);
    // console.log(store.getState().postsReducer.posts.data);
  });

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
      <div style={{ height: "100%" }}>
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
