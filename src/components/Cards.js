import React from "react";

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <div>{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
