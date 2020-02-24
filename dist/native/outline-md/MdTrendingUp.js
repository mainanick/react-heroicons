import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdTrendingUp(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </Svg>
  );
}

export default SvgMdTrendingUp;
