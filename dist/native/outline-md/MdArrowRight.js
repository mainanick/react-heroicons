import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdArrowRight(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </Svg>
  );
}

export default SvgMdArrowRight;
