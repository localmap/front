import React  from "react";
import styled from "styled-components";

interface TextProps {
    lineHeight?: string | number | boolean;
    width?: string;
    margin?: string;
    padding?: string | boolean;
    children?: any
    size?: string;
    weight?: string | boolean;
    color?: string;
    _onClick?: () => void;
  }
  
const Text: React.FC<TextProps>  = (props) => {
  const {lineHeight, width, margin, padding, children, size, weight, color,
    _onClick } = props;

  const styles = {
    size: size,
    weight: weight,
    color: color,
    margin: margin,
    padding: padding,
    width: width,
    lineHeight: lineHeight,
  }

  return (
    <React.Fragment>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  size: "14px",
  weight: false,
  color: "",
  _onClick: () => {},
  padding: false,
  width: "",
  lineHeight: false,
  margin: "0px",
};

const P = styled.p`
  display: block;
  ${(props: TextProps) => (props.size ? `font-size: ${props.size};` : "")}
  ${(props: TextProps) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props: TextProps) => (props.width ? `width: ${props.width};` : "")}
  ${(props: TextProps) => (props.weight ? `font-weight: ${props.weight};` : "")}
  ${(props: TextProps) => (props.color ? `color: ${props.color};` : "")}
  ${(props: TextProps) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props: TextProps) =>
    props.lineHeight ? `line-height: ${props.lineHeight};` : ""}
`;
export default Text;