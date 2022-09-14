import React, { useState } from "react";
import styled from "styled-components";
import { backgroundImages, colors } from "../lib/utils";

const PopUpBg = ({ onBgChange }) => {
  const [photoVisible, setPhotoVisible] = useState(false);
  const [colorVisible, setColorVisible] = useState(false);
  const onPhotoVisible = () => {
    setPhotoVisible((prev) => !prev);
    setColorVisible(false);
  };
  const onColorVisible = () => {
    setColorVisible((prev) => !prev);
    setPhotoVisible(false);
  };

  return (
    <div>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <div onClick={onPhotoVisible} style={{ cursor: "pointer" }}>
            photos
          </div>
          <div onClick={onColorVisible} style={{ cursor: "pointer" }}>
            color
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {photoVisible
            ? backgroundImages.map((image) => (
                <CoverImage
                  key={image}
                  url={image}
                  onClick={() => onBgChange({ url: image })}
                ></CoverImage>
              ))
            : null}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {colorVisible
            ? colors.map((color) => (
                <ColorButton
                  key={color.rgb}
                  rgb={color.rgb}
                  onClick={() => onBgChange({ color: color.rgb })}
                ></ColorButton>
              ))
            : null}
        </div>
      </Wrapper>
    </div>
  );
};

export default PopUpBg;

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
`;

const ColorButton = styled.div`
  width: 100px;
  height: 85px;
  border-radius: 2.5px;
  margin: 1.5px 3px;
  box-sizing: border-box;
  background-color: ${(props) => props.rgb};
  border: ${(props) => (props.rgb ? props.rgb : "1px dashed black")};
  flex: 1 1 48%;
  z-index: 1;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
const CoverImage = styled.div`
  width: 100px;
  height: 85px;
  border-radius: 2.5px;
  margin: 1.5px 3px;
  box-sizing: border-box;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  flex: 1 1 48%;
  z-index: 1;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
