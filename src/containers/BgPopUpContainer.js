import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PopUpBg from "../components/PopUpBg";
import { SAVE_BACKGROUND } from "../redux/module";

const BgPopUpContainer = (props) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onBgChange = ({url, color}) => {
    dispatch({ type: SAVE_BACKGROUND, payload: { url, color } });
  };
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>
        Change Background
      </button>
      {visible ? <PopUpBg onBgChange={onBgChange}/> : null}
    </div>
  );
};

export default BgPopUpContainer;
