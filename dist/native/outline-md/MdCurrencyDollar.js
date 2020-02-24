import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMdCurrencyDollar(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        fill="#4A5568"
        d="M13.843 9.655a1 1 0 101.511-1.31l-1.51 1.31zm-3.686 4.69a1 1 0 00-1.51 1.31l1.51-1.31zM13 7a1 1 0 10-2 0h2zm-2 10a1 1 0 102 0h-2zm9-5a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2zm8-8a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2zm0 7c-.659 0-1.21-.18-1.567-.418C10.07 10.34 10 10.114 10 10H8c0 .99.602 1.765 1.324 2.246.729.486 1.678.754 2.676.754v-2zm-2-1c0-.114.07-.34.433-.582C10.79 9.18 11.342 9 12 9V7c-.998 0-1.947.268-2.676.754C8.602 8.234 8 9.009 8 10h2zm2-1c.904 0 1.563.332 1.843.655l1.511-1.31C14.597 7.472 13.317 7 12 7v2zm0 4c.659 0 1.21.18 1.567.418.364.243.433.468.433.582h2c0-.99-.602-1.765-1.324-2.246C13.947 11.268 12.998 11 12 11v2zm-1-6v1h2V7h-2zm0 9v1h2v-1h-2zm1-1c-.904 0-1.563-.332-1.843-.655l-1.51 1.31C9.402 16.528 10.682 17 12 17v-2zm2-1c0 .114-.07.34-.433.582-.357.238-.908.418-1.567.418v2c.998 0 1.947-.268 2.676-.754C15.398 15.766 16 14.991 16 14h-2zm-3-6v8h2V8h-2z"
      />
    </Svg>
  );
}

export default SvgMdCurrencyDollar;
