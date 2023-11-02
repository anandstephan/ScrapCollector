import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MainIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 5L7.5 5C6.11929 5 5 6.11929 5 7.5L5 12.5H0V7.5C0 3.35786 3.35786 0 7.5 0H12.5V5Z"
      fill="white"
    />
    <Path
      d="M35 12.5V7.5C35 6.11929 33.8807 5 32.5 5H27.5V0H32.5C36.6421 0 40 3.35786 40 7.5V12.5H35Z"
      fill="white"
    />
    <Path
      d="M5 32.5V27.5H0V32.5C0 36.6421 3.35786 40 7.5 40H12.5V35H7.5C6.11929 35 5 33.8807 5 32.5Z"
      fill="white"
    />
    <Path
      d="M27.5 35H32.5C33.8807 35 35 33.8807 35 32.5V27.5H40V32.5C40 36.6421 36.6421 40 32.5 40H27.5V35Z"
      fill="white"
    />
    <Path
      d="M2.5 17.5C1.11929 17.5 0 18.6193 0 20C0 21.3807 1.11929 22.5 2.5 22.5H37.5C38.8807 22.5 40 21.3807 40 20C40 18.6193 38.8807 17.5 37.5 17.5H2.5Z"
      fill="white"
    />
  </Svg>
);
export default MainIcon;
