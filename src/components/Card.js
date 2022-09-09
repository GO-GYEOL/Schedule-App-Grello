import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Cover from "./CardDetail/Cover";

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
      <Draggable key={card.id} draggableId={card.id} index={cardIndex}>
        {(provided) => (
          <div
            key={card.id}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={() => onClick(card, cardIndex)}
          >
            <Cover card={card}/>
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
