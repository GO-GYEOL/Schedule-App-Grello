import React from "react";
import Title from "../components/CardDetail/Title";
import Description from "../components/CardDetail/Description";
import Comments from "../components/CardDetail/Comments";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cover from "../components/CardDetail/Cover";
import styled from "styled-components";

const CardDetailContainer = (props) => {
  const userData = useSelector((state) => state.userReducer);
  const postsData = useSelector((state) => state.postsReducer.posts.data);
  const { cardIndex, boardIndex } = useLocation().state;
  const card = postsData.AllBoard[boardIndex].cards[cardIndex];
  return (
    <Wrapper style={{ width: "600px" }}>
      <Cover
        card={card}
        cardIndex={cardIndex}
        boardIndex={boardIndex}
        userData={userData}
      />
      <Title
        card={card}
        cardIndex={cardIndex}
        boardIndex={boardIndex}
        userData={userData}
      />
      <Description
        card={card}
        cardIndex={cardIndex}
        boardIndex={boardIndex}
        userData={userData}
      />
      <Comments
        card={card}
        cardIndex={cardIndex}
        boardIndex={boardIndex}
        userData={userData}
      />
    </Wrapper>
  );
};

export default CardDetailContainer;

const Wrapper = styled.div`
  padding: 20px;
`;
