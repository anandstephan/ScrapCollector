import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LocationIcon = (props) => (
  <Svg
    width={28}
    height={31}
    viewBox="0 0 28 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7961 30.8082C17.7619 29.3088 28 23.4246 28 13.6458C28 6.10943 21.732 0 14 0C6.26801 0 0 6.10943 0 13.6458C0 23.4246 10.2381 29.3088 13.2039 30.8082C13.7097 31.0639 14.2903 31.0639 14.7961 30.8082ZM14 19.494C17.3137 19.494 20 16.8757 20 13.6458C20 10.4159 17.3137 7.7976 14 7.7976C10.6863 7.7976 8 10.4159 8 13.6458C8 16.8757 10.6863 19.494 14 19.494Z"
      fill={props.focused ? "#036638":"#000000"}
    />
  </Svg>
);
export default LocationIcon;
