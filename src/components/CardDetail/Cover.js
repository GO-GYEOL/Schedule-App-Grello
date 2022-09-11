import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

const CoverBg = styled.div`
  background-color: rgb(${(props) => props.color});
  background-image: url(${(props) => (props.src ? props.src : null)});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => (props.color || props.src ? "50px" : null)};
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
`;

const Cover = ({ card, cardIndex, boardIndex, userData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CoverBg
        src={card.cover_url ? card.cover_url : null}
        color={card.cover_color}
      ></CoverBg>
      <button onClick={() => setVisible(true)}>Cover</button>
      {visible ? (
        <>
          <PopUp card={card} cardIndex={cardIndex} boardIndex={boardIndex} />
          <Overlay onClick={() => setVisible(false)} />
        </>
      ) : null}
    </>
  );
};

export default Cover;
