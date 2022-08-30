import React, { useRef } from "react";

const AddCard = ({ onAddCard }) => {
  const inputRef = useRef();
  const onSumbit = (event) => {
    event.preventDefault();
    onAddCard(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={onSumbit}>
      <input ref={inputRef}></input>
    </form>
  );
};

export default AddCard;
