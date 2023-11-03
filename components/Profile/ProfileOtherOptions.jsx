import { Box, HStack, Pressable, Text } from "native-base"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const ProfileOtherOptions = ({text}) =>{

    const navigation = useNavigation()
const onPressHandler = () =>{
    navigation.navigate('ProfileUpdate')
}   

return <Box>
    <Pressable onPress={onPressHandler}>
    <HStack mx="10" justifyContent={'space-between'} alignItems={'center'} p="2" >
    <AntDesign name="logout" size={24} color="black" />
    <Text mr="50%">{text}</Text>
    </HStack>
    </Pressable>
</Box>
}

export default ProfileOtherOptions