import { useNavigation } from "@react-navigation/native"
import { VStack,Box,Heading, Center, Text,View, ScrollView } from "native-base"
import CartButton from "../components/Cart/CartButton"
import ReportInput from "../components/Report/ReportInput"
import colors from "../constants/colors"

const Report = () =>{
    const navigation = useNavigation()
    const onPressHandler = () =>{
        navigation.navigate('Logout')
    }
return <VStack bgColor={colors.sliderColor} flex={1}>
        <Box bgColor={colors.fontColor} p={10}>
            <Center>
            <Heading size={'xl'} color={colors.secondary}>Report an Accident or Emergency</Heading>
            </Center>
        </Box>
        <Box p={10} bgColor={colors.secondary} m={6}>
            <Heading size={'sm'}> Discalmer</Heading>
            <Text>Please use this page to report a serious incident  
            or accident only</Text>
        </Box>
        <Box p={10} bgColor={colors.secondary} m={6}>
            <VStack>
   
            <ReportInput placeholdertxt={"How can we help you ?"}/>
            <ReportInput placeholdertxt={"Name"}/>
            <ReportInput placeholdertxt={"Email or Phone Number"}/>
            <ReportInput placeholdertxt={"Message"} height={100}/>
            <View w="70%">
            <CartButton txt="Send Message" onPressHandler={onPressHandler}/>
            </View>

       
            </VStack>
 
        </Box>
</VStack>
}

export default Report