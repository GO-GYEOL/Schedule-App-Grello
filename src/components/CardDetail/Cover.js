import React from "react";
import styled from "styled-components";

const CoverBg = styled.div`
  background-color: ${(props) => props.color};
  background-image: url(${(props) => (props.src ? props.src : null)});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => (props.color || props.src ? "50px" : null)};
`;
const Cover = ({ card }) => {
  return (
    <>
      <CoverBg src={card.cover ? card.cover : null} color={card.color}>
        {console.log(card)}
      </CoverBg>
    </>
  );
};

export default Cover;
