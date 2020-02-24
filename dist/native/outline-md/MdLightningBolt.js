import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdLightningBolt(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </Svg>
  );
}

export default SvgMdLightningBolt;
