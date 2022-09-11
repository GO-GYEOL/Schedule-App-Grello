import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SAVE_COVER_COLOR, SAVE_COVER_URL } from "../../redux/module";

const colors = [
  { color: "green", rgb: "123, 199, 108" },
  { color: "yellow", rgb: "246, 221, 41" },
  { color: "orange", rgb: "255, 175, 64" },
  { color: "red", rgb: "239, 118, 101" },
  { color: "purple", rgb: "205, 141, 228" },
  { color: "blue", rgb: "91, 164, 207" },
  { color: "skyblue", rgb: "40, 204, 230" },
  { color: "lightgreen", rgb: "109, 235, 169" },
  { color: "pink", rgb: "255, 142, 212" },
  { color: "indigo", rgb: "23, 43, 76" },
  { color: "null", rgb: null },
];

const coverImages = [
  "https://cdn.pixabay.com/photo/2022/06/21/19/01/coast-7276345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/17/04/07/tree-7391504_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/02/19/04/sunflower-7428212_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/18/14/52/maple-leaves-7395109_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/06/29/17/47/coffee-7292250_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/31/11/01/kangaroo-7423042_960_720.jpg",
];

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
  background-color: rgb(${(props) => props.rgb});
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
