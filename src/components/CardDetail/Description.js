import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SAVE_DESCRIPTION } from "../../redux/module";
const Description = ({ card, cardIndex, boardIndex, userData }) => {
  const textRef = useRef();
  const dispatch = useDispatch();
  const onSave = (event) => {
    event.preventDefault();
    dispatch({
      type: SAVE_DESCRIPTION,
      payload: { body: textRef.current.value, cardIndex, boardIndex, userData },
    });
  };
  const onCancel = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <FontAwesomeIcon icon={faAlignLeft} />
      <span>Description</span>
      <div>
        <textarea ref={textRef} defaultValue={card.body} />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Description;
