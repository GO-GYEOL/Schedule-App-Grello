import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PopUpBg from "../components/PopUpBg";
import { SAVE_BACKGROUND } from "../redux/module";

const ChangeBackground = (props) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onBgChange = ({ url, color }) => {
    dispatch({ type: SAVE_BACKGROUND, payload: { url, color } });
  };
  const onClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <ChangeBgBtn onClick={onClick}>Change Background</ChangeBgBtn>
      {visible ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
          }}
        >
          <Overlay onClick={onClick} />
          <PopUpBg onBgChange={onBgChange} />
        </div>
      ) : null}
    </>
  );
};

export default ChangeBackground;

const ChangeBgBtn = styled.button`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    background-color: #e0e7ec;
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
