import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    <Draggable draggableId={card.id} index={cardIndex}>
      {(provided) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          {...provided.draggableProps.style}
          onClick={() => onClick(card, cardIndex)}
        >
          <CardCover card={card} />
          <UserInfo>
            <UserPhoto src={card.photoURL} />
            <UserName>{card.displayName}</UserName>
          </UserInfo>
          <Title>{card.title}</Title>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom:10px;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: end;
`;
const UserPhoto = styled.img`
  width: 10px;
  height: 10px;
  border-radius: 7px;
  margin-right: 3px;
`;
const UserName = styled.div`
  font-size: 10px;
`;
const Title = styled.div`
  font-size: 15px;
  text-align: center;
`;
