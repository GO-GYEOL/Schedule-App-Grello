import React, { useEffect } from "react";
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

  if (!data) return null;
  return (
    <div>
      <AddBoardContainer />
      <Boards posts={data} />
    </div>
  );
};

export default BoardsContainer;
