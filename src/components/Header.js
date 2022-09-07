import React from "react";

const Header = ({ userData }) => {
  const { uid, displayName, photoURL } = userData;
  return (
    <div>
      <img src={photoURL} />
      <div>{displayName}</div>
    </div>
  );
};

export default Header;
