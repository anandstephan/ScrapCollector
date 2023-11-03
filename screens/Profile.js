import { Text, VStack } from "native-base"
import Search from "../components/common/Search"
import UserDetailCard from "../components/Profile/UserDetailCard"
import colors from "../constants/colors"

const Profile = () =>{
return <VStack bgColor={colors.sliderColor} flex={1}>
    <Search/>
    <UserDetailCard/>
</VStack>
}
export default Profile