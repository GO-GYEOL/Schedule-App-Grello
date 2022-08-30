import React from "react";

const LogIn = ({ onLogin }) => {
  const onClick = (providerName) => {
    onLogin(providerName);
  };
  return (
    <div>
      <button onClick={() => onClick("Google")}>Google</button>
      <button onClick={() => onClick("Github")}>Github</button>
      <button onClick={() => onClick("Anonymous")}>익명</button>
    </div>
  );
};

export default LogIn;
