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
const CardCover = ({ card }) => {
  return (
    <>
      <CoverBg
        src={card.cover_url ? card.cover_url : null}
        color={card.cover_color}
      ></CoverBg>
    </>
  );
};

export default CardCover;
