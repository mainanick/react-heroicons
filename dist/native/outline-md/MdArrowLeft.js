import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdArrowLeft(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </Svg>
  );
}

export default SvgMdArrowLeft;
