import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdCurrencyYen(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default SvgMdCurrencyYen;
