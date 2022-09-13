import React, { useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AddCardContainer from "../containers/AddCardContainer";
import { SAVE_BOARD_TITLE } from "../redux/module";
import Card from "./Card";

const Board = ({ board, boardIndex }) => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSaveBoardTitle = (event) => {
    event.preventDefault();
    console.log("complete");
    setVisible(true);
    dispatch({
      type: SAVE_BOARD_TITLE,
      payload: { title: inputRef.current.value, boardIndex: boardIndex },
    });
    inputRef.current.blur();
  };
  return (
    <Draggable draggableId={board.id} index={boardIndex}>
      {(provided) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <form onSubmit={onSaveBoardTitle}>
            {visible ? (
              <Title
                onClick={() => {
                  setVisible(false);
                }}
              >
                {board.title}
              </Title>
            ) : (
              <TitleInput ref={inputRef} defaultValue={board.title} autoFocus />
            )}
          </form>
          <Droppable droppableId={board.id} type="cards">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {board.cards.map((card, cardIndex) => (
                  <Card
                    key={card.id}
                    card={card}
                    cardIndex={cardIndex}
                    boardIndex={boardIndex}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddCardContainer boardId={board.id} />
          {/* 수정해야한다. components가 container를 부르면 안된다. */}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Board;

const Wrapper = styled.div`
  width: 272px;
  margin: 5px;
  background-color: #ebecef;
  border-radius: 5px;
  padding: 10px 5px 10px 5px;
  height: 100%;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: 600;
  background-color: inherit;
  outline: 2px solid #2196f3;
`;

const Title = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: bold;
`;
