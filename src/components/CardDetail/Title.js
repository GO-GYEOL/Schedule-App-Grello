import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SAVE_CARD_TITLE } from "../../redux/module";
import styled from "styled-components";

const Title = ({ card, cardIndex, boardIndex, userData }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    !visible && setVisible(true);
    dispatch({
      type: SAVE_CARD_TITLE,
      payload: {
        title: inputRef.current.value,
        cardIndex,
        boardIndex,
        userData,
      },
    });
    inputRef.current.blur();
  };
  const showTitle = () => {
    setVisible(false);
  };
  return (
    <Wrapper>
      <Header>
        <IconImg src="/images/title.svg" />
        <Form onSubmit={onSubmit} style={{ width: "100%" }}>
          {visible ? (
            <TitleDiv onClick={showTitle}>{card.title}</TitleDiv>
          ) : (
            <>
              <Overlay onClick={onSubmit} />
              <TitleInput ref={inputRef} defaultValue={card.title} />
            </>
          )}
        </Form>
      </Header>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 30px;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
`;
const TitleDiv = styled.div`
  width: 100%;
  cursor: pointer;
  font-size: 18px;
`;
const TitleInput = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  outline: 2px solid #2196f3;
  font-size: 18px;
  position: relative;
`;

const IconImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  margin-right: 10px;
`;

const Form = styled.form`
  display: flex;
`;
