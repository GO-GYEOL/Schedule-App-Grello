import React, { useRef } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import AddCardContainer from "../containers/AddCardContainer";
import { SAVE_BOARD_TITLE } from "../redux/module";
import Card from "./Card";

const Board = ({ board, boardIndex }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSaveBoardTitle = (event) => {
    event.preventDefault();
    console.log("complete");
    dispatch({
      type: SAVE_BOARD_TITLE,
      payload: { title: inputRef.current.value, boardIndex: boardIndex },
    });
    inputRef.current.blur();
  };
  return (
    <Draggable key={board.id} draggableId={board.id} index={boardIndex}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={board.id}
        >
          <AddCardContainer boardId={board.id} />
          {/* 수정해야한다. components가 container를 부르면 안된다. */}

          <form onSubmit={onSaveBoardTitle}>
            <input ref={inputRef} defaultValue={board.title} />
          </form>
          <Droppable droppableId={board.id} type="cards">
            {(provided) => (
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
        </div>
      )}
    </Draggable>
  );
};

export default Board;
