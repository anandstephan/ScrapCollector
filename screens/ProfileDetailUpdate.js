import { Box, Text, VStack,Image, Center, View } from "native-base"
import CartButton from "../components/Cart/CartButton"
import CustomInput from "../components/Profile/CustomInput"
import colors from "../constants/colors"


const ProfileDetailUpdate = () =>{
return <VStack flex={1} backgroundColor={colors.sliderColor} justifyContent={'space-between'} >
        <View>
        <Center mt={5}>
    <Image source={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="Userpic" width={150} height={150} borderRadius={100}/>
    </Center>
    <CustomInput placeholderTxt="Enter Your Name" />
    <CustomInput placeholderTxt="Enter Your Mobile No." />
    <CustomInput placeholderTxt="Enter Your Email Address" />
    <CustomInput placeholderTxt="Enter Your Date of Birth" />
        </View>
    <CartButton txt="Update Profile"/>
</VStack>
}

export default ProfileDetailUpdate