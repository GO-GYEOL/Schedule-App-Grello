import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const Title = ({ card }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faWindowMaximize} />
      <span>{card.title}</span>
    </div>
  );
};

export default Title;
