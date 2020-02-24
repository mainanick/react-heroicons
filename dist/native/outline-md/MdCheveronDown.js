import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdCheveronDown(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </Svg>
  );
}

export default SvgMdCheveronDown;
