import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Boards from "../components/Boards";
import { getPostsFn, ON_DRAG_END } from "../redux/module";
import AddBoardContainer from "./AddBoardContainer";

const BoardsContainer = ({ postsData, dispatch }) => {
  const onDragEnd = (props) => {
    props.destination && dispatch({ type: ON_DRAG_END, payload: props });
  };

  if (!postsData) return <div>hi</div>;
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards postsData={postsData} />
      </DragDropContext>
    </div>
  );
};

export default BoardsContainer;
