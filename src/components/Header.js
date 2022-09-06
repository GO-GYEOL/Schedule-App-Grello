import React from "react";

const Header = ({ data }) => {
  const { uid, displayName, photoURL } = data;
  return (
    <div>
      <img src={photoURL} />
      <div>{displayName}</div>
    </div>
  );
};

export default Header;
