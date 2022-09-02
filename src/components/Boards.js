import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCardContainer from "../containers/AddCardContainer";
import Cards from "./Cards";

const Boards = ({ data }) => {
  const boards = data.AllBoard;
  return (
    <Droppable droppableId="AllBoard" direction="horizontal" type="boards">
      {(provided) => (
        <div
          style={{ display: "flex" }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {boards.map((board, index) => (
            <Draggable key={board.id} draggableId={board.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={board.id}
                >
                  <AddCardContainer boardId={board.id} />
                  <div>{board.title}</div>
                  <Droppable
                    droppableId={board.id}
                    type="cards"
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Cards cards={board.cards} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Boards;
