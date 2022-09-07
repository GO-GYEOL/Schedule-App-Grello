import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

const Cards = ({ cards, boardId, boardIndex }) => {
  const navigate = useNavigate();
  const onClick = (card, index) => {
    navigate(`/home/${card.id}`, {
      state: {
        cardIndex: index,
        card: card,
        boardId: boardId,
        boardIndex: boardIndex,
      },
    });
  };
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
              onClick={() => onClick(card, index)}
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
