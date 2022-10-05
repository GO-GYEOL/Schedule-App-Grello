import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DELETE_USER } from "../redux/module";

const UserPop = (props) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({ type: DELETE_USER });
  };
  return (
    <PopUp>
      <Button onClick={logOut}>로그아웃</Button>
    </PopUp>
  );
};

export default UserPop;

const PopUp = styled.div`
  position: absolute;
  right: 0px;
  padding: 5px;
  background-color: white;
`;
const Button = styled.button`
  width: 100px;
  padding: 5px 15px 5px 15px;
`;
