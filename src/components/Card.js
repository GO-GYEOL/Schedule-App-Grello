import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import CardCover from "./CardCover";

const Card = ({ card, cardIndex, boardIndex }) => {
  const navigate = useNavigate();
  const onClick = (card, cardIndex) => {
    navigate(`/home/${card.id}`, {
      state: {
        cardIndex,
        card: card,
        boardIndex: boardIndex,
      },
    });
  };
  return (
    <div>
      <Draggable draggableId={card.id} index={cardIndex}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={() => onClick(card, cardIndex)}
          >
            <CardCover card={card} />
            <img src={card.photoURL} />
            <div>{card.displayName}</div>
            <div>{card.title}</div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
