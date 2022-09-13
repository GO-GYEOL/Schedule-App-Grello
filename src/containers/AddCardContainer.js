import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCard from "../components/AddCard";
import { ADD_CARD } from "../redux/module";

const AddCardContainer = ({ boardId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const onAddCard = (title) => {
    dispatch({
      type: ADD_CARD,
      payload: {
        boardId,
        title,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    });
  };
  const [visible, setVisible] = useState(false);
  const openAddCard = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      {visible ? (
        <AddCard onAddCard={onAddCard} />
      ) : (
        <div onClick={openAddCard}>Add a Card</div>
      )}
    </div>
  );
};

export default AddCardContainer;
