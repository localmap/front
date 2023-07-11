import styled from 'styled-components';
import React from "react";

interface ImageProps {
    margin?: string | boolean;
    width?: string;
    src?: string;
    height?: string;
    _onClick?: () => void;
  }

const Image: React.FC<ImageProps> = (props) => {
    const {margin, width, src, height, _onClick} = props;

    const styles = {
        src: src,
        width: width,
        height: height,
        margin: margin
    }

    return(
        <React.Fragment>
            <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps ={
    src: "",
    width: "100px",
    height: "100px",
    _onClick : ()=>{},
    margin: false,
}

const ImageDefault = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Image;