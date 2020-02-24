import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdZoomOut(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zm-4 0H7"
      />
    </Svg>
  );
}

export default SvgMdZoomOut;
