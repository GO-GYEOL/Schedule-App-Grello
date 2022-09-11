import React, { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import Board from "./BoardAndcards";

const Boards = ({ postsData }) => {
  const boards = postsData.AllBoard;
  return (
    <Droppable droppableId="AllBoard" direction="horizontal" type="boards">
      {(provided) => (
        <div
          style={{ display: "flex" }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {boards.map((board, index) => (
            <Board key={board.id} board={board} boardIndex={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Boards;
