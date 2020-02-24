import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdArrowNarrowRight(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </Svg>
  );
}

export default SvgMdArrowNarrowRight;
