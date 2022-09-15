import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_COMMENT, DELETE_COMMENT } from "../../redux/module";
import styled from "styled-components";
import swal from "sweetalert";
import * as utils from "../../lib/utils";

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
  const onDelete = (event, commentIndex) => {
    event.preventDefault();
    utils.warning().then((value) => {
      switch (value) {
        case "Yes":
          dispatch({
            type: DELETE_COMMENT,
            payload: {
              boardIndex,
              cardIndex,
              commentIndex,
            },
          });
          swal("삭제완료!");
          break;
        default:
          break;
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        <IconImg src="/images/comments.svg"></IconImg>
        <Span>Activity</Span>
      </Header>
      <Form onSubmit={onSubmit}>
        <Img src={userData.photoURL} />
        <InputWrapper>
          <Input placeholder="댓글을 입력하세요" ref={inputRef} />
          <Button>Submit</Button>
        </InputWrapper>
      </Form>
      <div>
        {card.comments.map((comment, index) => (
          <List key={comment.id}>
            <Img src={comment.photoURL} />
            <UserInfo>
              <Name>{comment.displayName}</Name>
              <Comment onClick={(event) => onDelete(event, index)}>
                {comment.body}
              </Comment>
            </UserInfo>
          </List>
        ))}
      </div>
    </Wrapper>
  );
};

export default Comments;
const Wrapper = styled.div`
  margin-top: 30px;
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
const InputWrapper = styled.div`
  width: 100%;
  margin-left: 15px;
  background-color: #ebecef;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 7px;
  border-radius: 3px;
  font-size: 12px;
  transition: 0.1s;
  margin-bottom: 5px;
  &:focus {
    width: 100%;
    /* height: 40px; */
    outline: 2px solid #2196f3;
  }
`;
const Button = styled.button`
  background-color: #0079be;
  color: white;
  font-size: 10px;
  padding: 8px;
  border-radius: 3px;
`;
const List = styled.div`
  display: flex;
  align-items: center;
`;
const UserInfo = styled.div`
  flex-direction: column;
  margin-left: 15px;
`;
const Name = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
`;
const Comment = styled.div`
  height: 25px;
  padding: 7px;
  border-radius: 3px;
  background-color: #ebecef;
  font-size: 12px;
  margin-bottom: 5px;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
