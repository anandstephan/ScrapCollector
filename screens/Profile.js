import { HStack, ScrollView, Text, VStack,Box, View } from "native-base"
import Search from "../components/common/Search"
import FeatureCard from "../components/Profile/FeatureCard"
import ProfileCard from "../components/Profile/ProfileCard"
import ProfileOtherOptions from "../components/Profile/ProfileOtherOptions"
import UserDetailCard from "../components/Profile/UserDetailCard"
import colors from "../constants/colors"

const otherOptionsArray = ['Choose Language','About Us','Send Feedback','Report','Logout']

const Profile = () =>{
return <VStack bgColor={colors.sliderColor} flex={1}>
    <Search/>
    <ScrollView>
    <UserDetailCard/>
    <HStack>
        <FeatureCard text="Favorite's"/>
        <FeatureCard text="Rewards"/>
        <FeatureCard text="Settings"/>
        
    </HStack>
    <VStack>
        <ProfileCard txt="Your Profile"/>
        <ProfileCard txt="Your Rating"/>
    </VStack>
    <Box bgColor={colors.secondary} height={300} mt="10">
        <HStack justifyContent={'start'} alignItems={'center'}>
        <VStack borderRightWidth={5} width={10} height={10} borderRightColor={'black'} />
        <Text ml="2">More</Text>
        </HStack>
        <VStack>
            {otherOptionsArray.map((item,idx) => <ProfileOtherOptions text={item} key={idx}/>)}
        </VStack>  
    </Box>
    </ScrollView>
  
</VStack>
}
export default Profile