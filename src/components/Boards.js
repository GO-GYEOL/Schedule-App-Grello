import React, { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./BoardAndcards";

const Boards = ({ postsData }) => {
  const boards = postsData.AllBoard;
  return (
    <Droppable droppableId="AllBoard" direction="horizontal" type="boards">
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {boards.map((board, index) => (
            <Board key={board.id} board={board} boardIndex={index} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Boards;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-y: hidden;
`;
