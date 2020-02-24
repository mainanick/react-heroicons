import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdMinusCircle(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default SvgMdMinusCircle;
