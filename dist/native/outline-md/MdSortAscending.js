import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdSortAscending(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
      />
    </Svg>
  );
}

export default SvgMdSortAscending;
