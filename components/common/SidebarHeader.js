import { HStack, View } from "native-base"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const SidebarHeader = () =>{
return  <HStack justifyContent={'space-between'}>
<Ionicons name="notifications-outline" size={24} color="black" />
<MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
</HStack>
}

export default SidebarHeader