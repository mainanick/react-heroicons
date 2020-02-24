import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdArrowCircleUp(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
    </Svg>
  );
}

export default SvgMdArrowCircleUp;
