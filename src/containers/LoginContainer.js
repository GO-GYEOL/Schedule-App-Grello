import React, { useEffect } from "react";
import LogIn from "../components/Login";
import { getLoginFn } from "../redux/module";
import { useDispatch } from "react-redux";

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const onLogin = async (providerName) => {
    dispatch(getLoginFn(providerName));
  };
  return <LogIn onLogin={onLogin} />;
};

export default LoginContainer;
