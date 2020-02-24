import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdBookmark(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </Svg>
  );
}

export default SvgMdBookmark;
