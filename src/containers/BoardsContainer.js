import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Boards from "../components/Boards";
import { getPostsFn } from "../redux/module";
import AddBoardContainer from "./AddBoardContainer";

const BoardsContainer = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postsReducer.posts);
  console.log(data);

  useEffect(() => {
    dispatch(getPostsFn());
  }, []);

  const onDragEnd = (props) => {
    console.log(props)
  }
  if (!data) return null;
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <AddBoardContainer />
        <Boards data={data} />
      </DragDropContext>
    </div>
  );
};

export default BoardsContainer;
