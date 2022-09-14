import React from "react";
import styled from "styled-components";

const AddBoard = ({ onAddBoard }) => {
  const onClick = () => onAddBoard();
  return <AddBoardBtn onClick={onClick}>Add Board</AddBoardBtn>;
};

export default AddBoard;

const AddBoardBtn = styled.button`
  /* width:30px; */
  height: 30px;
  border-radius: 5px;
  
  margin: 5px;
  &:hover{
    background-color:#e0e7ec
  }
`;
