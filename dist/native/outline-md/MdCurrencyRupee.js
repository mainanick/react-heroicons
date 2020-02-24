import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdCurrencyRupee(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default SvgMdCurrencyRupee;
