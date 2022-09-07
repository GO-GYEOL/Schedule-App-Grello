import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../../redux/module";
import { useSelector } from "react-redux";
const Comments = ({ card, userData, cardIndex, boardIndex }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_COMMENT,
      payload: {
        body: inputRef.current.value,
        displayName: userData.displayName,
        uid: userData.uid,
        photoURL: userData.photoURL,
        boardIndex,
        cardIndex,
      },
    });
    inputRef.current.value = "";
  };

  return (
    <div>
      <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faList} />
      <span>activity</span>
      <form onSubmit={onSubmit}>
        <img src={userData.photoURL} />
        <input placeholder="댓글을 입력하세요" ref={inputRef} />
      </form>
      <div>
        {card.comments.map((comment) => (
          <div key={comment.id}>
            <img src={comment.photoURL}></img>
            {comment.displayName}
            {comment.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
