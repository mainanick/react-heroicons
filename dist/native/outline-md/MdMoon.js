import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdMoon(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        fill="#4A5568"
        d="M20.354 15.354l.928.373a1 1 0 00-1.3-1.3l.372.927zM8.646 3.646l.928.373a1 1 0 00-1.301-1.301l.373.928zm11.335 10.78c-.92.37-1.925.574-2.981.574v2a9.976 9.976 0 003.727-.718l-.746-1.856zM17 15a8 8 0 01-8-8H7c0 5.523 4.477 10 10 10v-2zM9 7c0-1.056.204-2.061.574-2.981l-1.856-.746A9.975 9.975 0 007 7h2zm-5 5a8.003 8.003 0 015.019-7.426l-.746-1.856A10.003 10.003 0 002 12h2zm8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm7.426-5.019A8.003 8.003 0 0112 20.001v2c4.207 0 7.805-2.599 9.282-6.274l-1.856-.746z"
      />
    </Svg>
  );
}

export default SvgMdMoon;
