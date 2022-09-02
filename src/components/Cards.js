import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Draggable key={card.id} draggableId={card.id} index={index}>
          {(provided) => (
            <div
              key={card.id}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <div>{card.title}</div>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Cards;
