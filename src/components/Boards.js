import React, { useEffect, useRef, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./BoardAndcards";

const Boards = ({ postsData }) => {
  const ScrollBoxRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scroll, setScroll] = useState(null);

  const onMouseDown = (event) => {
    if (event.target.className) return;
    setIsDrag(true);
    setStartX(event.pageX);
  };

  const onMouseUp = () => {
    setIsDrag(false);
    setScroll(ScrollBoxRef.current.scrollLeft);
  };
  const onMouseMove = (event) => {
    if (!isDrag) return;
    event.preventDefault();
    const dragDistance = event.pageX - startX;
    ScrollBoxRef.current.scrollLeft = scroll - dragDistance;
  };

  const boards = postsData.AllBoard;

  return (
    <Wrapper>
      <Droppable droppableId="AllBoard" direction="horizontal" type="boards">
        {(provided) => (
          <SmallWrapper ref={provided.innerRef} {...provided.droppableProps}>
            <ScrollBox
              ref={ScrollBoxRef}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              value="hi"
            >
              {boards.map((board, index) => (
                <Board key={board.id} board={board} boardIndex={index} />
              ))}
              {provided.placeholder}
            </ScrollBox>
          </SmallWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Boards;
const Wrapper = styled.div`
  height: calc(100vh - 80px);
`;
const SmallWrapper = styled.div`
  height: 100%;
`;

const ScrollBox = styled.div`
  display: flex;
  background-color: pink;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 15px;
    background: lightgray;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: #919295;
  }

  /* 글자 드래그 방지 */
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;
