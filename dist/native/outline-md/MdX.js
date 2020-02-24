import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdX(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  );
}

export default SvgMdX;
