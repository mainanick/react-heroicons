import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSmDotsHorizontal(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <Path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm4 2a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgSmDotsHorizontal;
