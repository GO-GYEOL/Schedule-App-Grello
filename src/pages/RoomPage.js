import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setNewPosts } from "../api/apis";
import { store } from "../redux/store";

const RoomPage = (props) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [key, setKey] = useState();
  const [visible, setVisible] = useState(false);
  const onCreateRoom = async (event) => {
    event.preventDefault();
    const result = window.confirm("번호를 받으시겠어요?");
    if (result) {
      const roomNumber = Date.now().toString();
      setNewPosts(roomNumber);
      setKey(roomNumber);
      setVisible(true);
    } else {
      window.alert("다음에 만나요");
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/${inputRef.current.value}/home`);
  };

  return (
    <Wrapper>
      <PopUp>
        <Img src="/images/dog.png" />
        <Title>새로운 보드를 발급 받으세요</Title>
        <Text>
          한번 발급된 번호는 기억해 주세요.. <br />
          그러나 다시 발급받아도 괜찮습니다!
        </Text>
        <Text>감사합니다!</Text>
        {!visible ? (
          <Button onClick={onCreateRoom}>발급받기</Button>
        ) : (
          <Key color="#ff8602">{key}</Key>
          // 여기에 roomNumber가 와야하는데 어떻게 오게 할 수 있을까?
        )}
        <form onSubmit={onSubmit}>
          <Input placeholder="보드 번호를 입력하세요" ref={inputRef}></Input>
        </form>
      </PopUp>
      <Background />
    </Wrapper>
  );
};

export default RoomPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
`;
const Background = styled.div`
  width: 90%;
  height: 80%;
  background-image: url("/images/subway.jpg");
  background-size: contain;
  background-position: center;
  position: absolute;
  z-index: -1;
`;
const PopUp = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 40px 0px;
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "11px")};
  color: ${(props) => (props.color ? props.color : "gray")};
`;
const Key = styled.div`
  font-size: 15px;
  color: #ff8602;
  font-weight: bold;
`;
const Button = styled.div`
  display: inline-block;
  background-color: #ff8602;
  color: white;
  font-size: 13px;
  border-radius: 25px;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  margin-top:5px;
`;
const Input = styled.input`
  padding: 5px;
  text-align: center;
`;
