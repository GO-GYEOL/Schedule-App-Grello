import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SAVE_DESCRIPTION } from "../../redux/module";
import styled from "styled-components";
const Description = ({ card, cardIndex, boardIndex, userData }) => {
  const textRef = useRef();
  const dispatch = useDispatch();
  const onSave = (event) => {
    event.preventDefault();
    dispatch({
      type: SAVE_DESCRIPTION,
      payload: { body: textRef.current.value, cardIndex, boardIndex, userData },
    });
  };
  const onCancel = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header>
        <IconImg src="/images/description.svg" />
        <Span>Description</Span>
      </Header>
      <Wrapper>
        <TextArea ref={textRef} defaultValue={card.body}/>
        <Button bgColor="#0079be" color="white" onClick={onSave}>
          Save
        </Button>
        <Button bgColor="white" onClick={onCancel}>
          Cancel
        </Button>
      </Wrapper>
    </>
  );
};

export default Description;

const Wrapper = styled.div`
  margin-left: 40px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #ebecef;
  resize: none;
  &:focus {
    outline: 3px solid #2196f3;
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.color ? props.color : "black")};
  padding: 8px;
  border-radius: 3px;
  margin-right: 10px;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 30px;
`;
const IconImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
`;
const Span = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;
