import React from "react";
import AddCardContainer from "../containers/AddCardContainer";
import Cards from "./Cards";

const Boards = ({ posts }) => {
  const boards = posts.AllBoard;
  return (
    <div>
      {boards.map((board) => (
        <div key={board.id}>
          <AddCardContainer boardId={board.id} />
          <div>{board.title}</div>
          <Cards cards={board.cards} />
        </div>
      ))}
    </div>
  );
};

export default Boards;
