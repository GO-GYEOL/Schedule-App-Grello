import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DELETE_CARD } from "../redux/module";
import CardCover from "./CardCover";
import * as utils from "../lib/utils";
import swal from "sweetalert";

const Card = ({ card, cardIndex, boardIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const onDelete = (event) => {
    event.preventDefault();
    utils.warning().then((value) => {
      switch (value) {
        case "Yes":
          dispatch({
            type: DELETE_CARD,
            payload: { boardIndex, cardIndex },
          });
          swal("삭제완료!");
        default:
          break;
      }
    });
  };
  const onClick = (card, cardIndex) => {
    navigate(`${card.id}`, {
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
        <div
          onMouseOver={() => setVisible(true)}
          onMouseOut={() => setVisible(false)}
        >
          {visible ? (
            <DelBtn onClick={onDelete} src="/images/delete.svg"></DelBtn>
          ) : null}
          <Wrapper
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            {...provided.draggableProps.style}
            onClick={() => onClick(card, cardIndex)}
          >
            <CardCover card={card} />
            <CardInfo>
              <>
                <UserPhoto src={card.photoURL} />
                <UserName>{card.displayName}</UserName>
              </>
            </CardInfo>
            <Title>{card.title}</Title>
          </Wrapper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0.5px 0px 0.5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 8px;
  padding-bottom: 5px;
`;
const CardInfo = styled.div`
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
const DelBtn = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  margin: 3px 0px 0px 3px;
  &:hover {
    background-color: #e0e7ec;
  }
`;
