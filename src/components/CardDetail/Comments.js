import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../../redux/module";
import styled from "styled-components";

const Comments = ({ card, userData, cardIndex, boardIndex }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_COMMENT,
      payload: {
        body: inputRef.current.value,
        displayName: userData.displayName,
        uid: userData.uid,
        photoURL: userData.photoURL,
        boardIndex,
        cardIndex,
      },
    });
    inputRef.current.value = "";
  };

  return (
    <Wrapper>
      <Header>
        <IconImg src="/images/comments.svg"></IconImg>
        <Span>Activity</Span>
      </Header>
      <Form onSubmit={onSubmit}>
        <Img src={userData.photoURL} />
        <Input placeholder="댓글을 입력하세요" ref={inputRef} />
      </Form>
      <div>
        {card.comments.map((comment) => (
          <List key={comment.id}>
            <Img src={comment.photoURL} />
            <UserInfo>
              <Name>{comment.displayName}</Name>
              <Comment>{comment.body}</Comment>
            </UserInfo>
          </List>
        ))}
      </div>
    </Wrapper>
  );
};

export default Comments;
const Wrapper = styled.div`
  margin-top: 40px;
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
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  position: relative;
`;
const Span = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;
const Form = styled.form`
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 7px;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 12px;
`;
const List = styled.div`
  display: flex;
  align-items: center;
`;
const UserInfo = styled.div`
  flex-direction: column;
  width: 100%;
  margin-left: 15px;
`;
const Name = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
`;
const Comment = styled.div`
  width: 100%;
  height: 25px;
  padding: 7px;
  border-radius: 3px;
  background-color: white;
  font-size: 12px;
  box-shadow: 0px 0.2px 1.5px 0px rgba(0, 0, 0, 0.6);
  margin-bottom: 5px;
`;
