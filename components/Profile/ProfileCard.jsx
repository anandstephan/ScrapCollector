import {  HStack, Text } from "native-base"
import { AntDesign } from '@expo/vector-icons';
import Badge from "./Badge";
import colors from "../../constants/colors";

const ProfileCard = ({txt}) =>{
 return <HStack justifyContent={'space-between'} alignItems="center" mx="10"  p={2} borderRadius={50}>
<AntDesign name="user" size={24} color="black" />
<Text>{txt}</Text>
    <Badge text="48% completed"/>
    <AntDesign name="caretright" size={14} color={colors.btnColor} />
 </HStack>
}

export default ProfileCard