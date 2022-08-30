import React from "react";
import AddBoard from "../components/AddBoard";
import { useDispatch } from "react-redux";
import { ADD_BOARD } from "../redux/module";

const AddBoardContainer = (props) => {
  const dispatch = useDispatch();
  const onAddBoard = () => {
    dispatch({ type: ADD_BOARD });
  };
  return <AddBoard onAddBoard={onAddBoard}/>;
};

export default AddBoardContainer;
