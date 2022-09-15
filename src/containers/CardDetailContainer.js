import React from "react";
import Title from "../components/CardDetail/Title";
import Description from "../components/CardDetail/Description";
import Comments from "../components/CardDetail/Comments";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cover from "../components/CardDetail/Cover";
import styled from "styled-components";

const CardDetailContainer = (props) => {
  const userData = useSelector((state) => state.userReducer);
  const postsData = useSelector((state) => state.postsReducer.posts.data);
  const { cardIndex, boardIndex } = useLocation().state;
  const card = postsData.AllBoard[boardIndex].cards[cardIndex];
  const naviagte = useNavigate();
  return (
    <>
      <Overlay onClick={() => naviagte(-1)} />
      <Wrapper>
        <Cover
          card={card}
          cardIndex={cardIndex}
          boardIndex={boardIndex}
          userData={userData}
        />
        <InnerWrapper>
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
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default CardDetailContainer;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  min-height: 600px;
  background-color: white;
  max-height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background: lightgray;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: #919295;
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;
const InnerWrapper = styled.div`
  padding: 20px 30px 30px 30px;
`;
