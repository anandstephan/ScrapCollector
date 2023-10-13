import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const ProfileIcon = (props) => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.3422 26.6154C27.9318 26.4926 28.2828 25.877 28.0101 25.34C27.1899 23.7244 25.819 22.3047 24.0334 21.239C21.8722 19.9491 19.2241 19.25 16.5 19.25C13.7758 19.25 11.1278 19.9491 8.96654 21.239C7.18088 22.3047 5.81 23.7244 4.9898 25.34C4.71716 25.877 5.06816 26.4926 5.65777 26.6154L8.3391 27.1742C13.7218 28.296 19.2781 28.296 24.6608 27.1742L27.3422 26.6154Z"
      fill={props.focused ? "#036638":"#000000"}
    />
    <Circle cx={16.5} cy={11} r={6.875} fill={props.focused ? "#036638":"#000000"} />
  </Svg>
);
export default ProfileIcon;
