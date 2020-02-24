import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdMenuAlt2(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </Svg>
  );
}

export default SvgMdMenuAlt2;
