import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdSelector(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </Svg>
  );
}

export default SvgMdSelector;
