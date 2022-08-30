import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginContainer from "../containers/LoginContainer";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  // 로그인 되어있을 시 Home으로 강제 이동
  const isLoggedIn = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn.uid) {
      console.log(isLoggedIn)
      navigate("/home");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
