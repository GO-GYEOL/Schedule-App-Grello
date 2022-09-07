import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SAVE_TITLE } from "../../redux/module";

const Title = ({ card, cardIndex, boardIndex, userData }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SAVE_TITLE,
      payload: {
        title: inputRef.current.value,
        cardIndex,
        boardIndex,
        userData,
      },
    });
    inputRef.current.blur();
  };
  return (
    <div>
      <FontAwesomeIcon icon={faWindowMaximize} />
      <form onSubmit={onSubmit}>
        <input ref={inputRef} defaultValue={card.title} />
      </form>
    </div>
  );
};

export default Title;
