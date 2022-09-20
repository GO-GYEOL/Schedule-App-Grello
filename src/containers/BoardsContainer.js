import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Boards from "../components/Boards";
import { ON_DRAG_END } from "../redux/module";

const BoardsContainer = ({ postsData, dispatch }) => {
  const onDragEnd = (props) => {
    props.destination && dispatch({ type: ON_DRAG_END, payload: props });
  };

  if (!postsData) return <div>hi</div>;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Boards postsData={postsData} />
    </DragDropContext>
  );
};

export default BoardsContainer;
