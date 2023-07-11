import React from "react";
import styled  from "styled-components";

interface GridProps {
    position?: string | boolean;
    float?: string | boolean;
    width?: string;
    height?: string;
    padding?: string | boolean;
    margin?: string | boolean;
    border?: string | boolean;
    display?: string;
    bgcolor?: string | boolean;
    alignitem?: string | boolean;
    justify?: string | boolean;
    textalign?: string | boolean;
    _onClick?:   () => void;
    children?: any;
  }

const Grid: React.FC<GridProps> = (props) =>{
    const {position, float, width, height, padding, margin, border, display, bgcolor, children, alignitem, 
        justify, textalign, _onClick} = props;

    const styles ={
        width: width,
        height: height,
        padding:padding,
        margin: margin,
        border: border,
        display: display,
        bgcolor: bgcolor,
        alignitem: alignitem,
        justify: justify,
        textalign: textalign,
        float:float,
        position: position
    }

    return(
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    width: "100%",
    height: "",
    padding: false,
    margin: false,
    border: false,
    display: "block",
    bgcolor: false,
    children: null,
    alignitem :false,
    justify: false,
    textalign : false,
    _onClick: () => {},
    float : false,
    position: false,
   
}

const GridBox = styled.div<GridProps>`
  width: ${({ width }) => width};
  ${({ height }) => (height ? `height: ${height};` : "")}
  ${({ padding }) => (padding ? `padding: ${padding};` : "")}
  ${({ margin }) => (margin ? `margin: ${margin};` : "")}
  ${({ border }) => (border ? `border: ${border};` : "")}
  ${({ display }) => (display ? `display: ${display};` : "")}
  ${({ bgcolor }) => (bgcolor ? `background: ${bgcolor};` : "")}
  ${({ alignitem }) => (alignitem ? `align-items: ${alignitem};` : "")}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")}
  ${({ textalign }) => (textalign ? `text-align: ${textalign};` : "")}
  ${({ float }) => (float ? `float: ${float};` : "")}
  ${({ position }) => (position ? `position: ${position};` : "")}
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
`;
export default Grid;