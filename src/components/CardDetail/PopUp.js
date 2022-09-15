import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { colors, coverImages } from "../../lib/utils";
import { SAVE_COVER_COLOR, SAVE_COVER_URL } from "../../redux/module";

const PopUp = ({ card, cardIndex, boardIndex }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const onSaveColorCover = (event, color) => {
    event.preventDefault();
    console.log(color.rgb);
    dispatch({
      type: SAVE_COVER_COLOR,
      payload: { color: color.rgb, cardIndex, boardIndex },
    });
  };
  const onSaveUrlCover = (event, url) => {
    event.preventDefault();
    dispatch({
      type: SAVE_COVER_URL,
      payload: {
        url: url ? url : inputRef.current.value,
        cardIndex,
        boardIndex,
      },
    });
    inputRef.current.value = "";
  };

  return (
    <Wrapper>
      <div>Colors</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <ColorButton
            key={color.color}
            rgb={color.rgb}
            onClick={(event) => onSaveColorCover(event, color)}
          ></ColorButton>
        ))}
      </div>

      <div>URL로 설정</div>
      <form onSubmit={onSaveUrlCover}>
        <input ref={inputRef} defaultValue={card.cover_url}></input>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {coverImages.map((url) => (
          <CoverImage
            key={url}
            url={url}
            onClick={(event) => onSaveUrlCover(event, url)}
          />
        ))}
      </div>

      <a href="https://pixabay.com/ko/">
        <img
          style={{ width: "100px" }}
          src="https://t1.daumcdn.net/cfile/tistory/995E7A395A79AE4005"
        ></img>
        <div>pixabay에서 사진 더 찾아보기</div>
      </a>
    </Wrapper>
  );
};

export default PopUp;

const Wrapper = styled.div`
  width: 300px;
  /* height: 250px; */
  background-color: whitesmoke;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 10px;
  box-sizing: border-box;
`;
const ColorButton = styled.div`
  width: 50px;
  height: 35px;
  border-radius: 2.5px;
  margin: 1.5px 3px;
  box-sizing: border-box;
  background-color: ${(props) => props.rgb};
  border: ${(props) => (props.rgb ? props.rgb : "1px dashed black")};
  flex: 1 1 17%;
  z-index: 1;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
const CoverImage = styled.div`
  width: 70px;
  height: 40px;
  border-radius: 2.5px;
  margin: 1.5px 3px;
  box-sizing: border-box;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  flex: 1 1 30%;
  z-index: 1;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
