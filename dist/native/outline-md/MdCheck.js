import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdCheck(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </Svg>
  );
}

export default SvgMdCheck;
