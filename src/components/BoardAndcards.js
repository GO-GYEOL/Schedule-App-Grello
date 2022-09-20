import React, { useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AddCardContainer from "../containers/AddCardContainer";
import { DELETE_BOARD, SAVE_BOARD_TITLE } from "../redux/module";
import Card from "./Card";
import * as utils from "../lib/utils";
import swal from "sweetalert";

const Board = ({ board, boardIndex }) => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onDelete = (event) => {
    event.preventDefault();
    utils.warning().then((value) => {
      switch (value) {
        case "Yes":
          dispatch({
            type: DELETE_BOARD,
            payload: { boardIndex: boardIndex },
          });
          swal("삭제완료!");
        default:
          break;
      }
    });
  };
  const onSaveBoardTitle = (event) => {
    event.preventDefault();
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
        <div value="hi">
          {/* 이 div를 이용해 스크롤 기능 조절했다. */}
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <form onSubmit={onSaveBoardTitle}>
              {visible ? (
                <Title onClick={() => setVisible(false)}>
                  {board.title}
                  <DelBtn
                    src="/images/dots.svg"
                    boardIndex={boardIndex}
                    onClick={onDelete}
                  />
                </Title>
              ) : (
                <>
                  <Overlay onClick={onSaveBoardTitle} />
                  <TitleInput
                    ref={inputRef}
                    defaultValue={board.title}
                    autoFocus
                  />
                </>
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
        </div>
      )}
    </Draggable>
  );
};

export default Board;

const Wrapper = styled.div`
  width: 272px;
  /* min-width: 272px; */
  flex-shrink: 0;
  margin: 5px;
  background-color: #ebecef;
  border-radius: 5px;
  padding: 10px 5px 10px 5px;
  /* height: 100%; */
  max-height: 85vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background: lightgray;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: #919295;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: 600;
  background-color: inherit;
  outline: 2px solid #2196f3;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const DelBtn = styled.img`
  width: 20px;
  height: 20px;
  padding: 1px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
