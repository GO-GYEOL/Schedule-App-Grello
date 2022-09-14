import React, { useRef, useState } from "react";
import styled from "styled-components";

const AddCard = ({ onAddCard }) => {
  const inputRef = useRef();
  const openAddCard = () => {
    setVisible((prev) => !prev);
  };
  const onSumbit = (event) => {
    event.preventDefault();
    if (inputRef.current.value == "") return;
    onAddCard(inputRef.current.value);
    openAddCard();
    inputRef.current.value = "";
  };
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible ? (
        <form onSubmit={onSumbit}>
          <TextArea
            ref={inputRef}
            spellCheck={false}
            placeholder="Add a new card here."
          ></TextArea>
          <Button>Add card</Button>
          <Cancel src="/images/X_icon.svg" onClick={openAddCard} />
        </form>
      ) : (
        <Div onClick={openAddCard}>Add a Card</Div>
      )}
    </div>
  );
};

export default AddCard;

const TextArea = styled.input`
  width: 100%;
  height: 50px;
  resize: none;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
const Div = styled.div`
  padding: 5px;
  &:hover {
    background-color: #e0e7ec;
  }
`;
const Button = styled.button`
  height: 30px;
  background-color: #0079be;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  &:hover {
    background-color: #275a81;
  }
`;
const Cancel = styled.img`
  width: 30px;
  position: relative;
  top: 10px;
`;
