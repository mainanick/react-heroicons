import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdSortDescending(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
      />
    </Svg>
  );
}

export default SvgMdSortDescending;
