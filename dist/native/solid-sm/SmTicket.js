import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSmTicket(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <Path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
    </Svg>
  );
}

export default SvgSmTicket;
