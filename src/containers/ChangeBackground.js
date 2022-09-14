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
    <div>
      <ChangeBgBtn onClick={onClick}>Change Background</ChangeBgBtn>
      {visible ? (
        <>
          <Overlay onClick={onClick} />
          <PopUpBg onBgChange={onBgChange} />
        </>
      ) : null}
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
`;
