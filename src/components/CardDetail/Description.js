import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
const Description = ({ card }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faAlignLeft} />
      <span>Description</span>
      <div>
        <textarea defaultValue={card.body} />
      </div>
    </div>
  );
};

export default Description;
