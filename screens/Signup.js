import { Box, Heading, View, VStack,FormControl,Input,Icon,Button, HStack, Text } from "native-base"
import colors from "../constants/colors"
import SignupImg from "../images/Signup"
import { MaterialIcons } from '@expo/vector-icons';
import Mail from "../images/Mail";
import Twitter from "../images/Twitter";
import Facebook from "../images/Facebook";
import { StyleSheet } from "react-native";


const Signup = () =>{
return <Box backgroundColor={colors.primary}>
    <VStack >   
    <View mx={2}>
    <SignupImg/>
    </View>
    <Box backgroundColor={colors.secondary} height={'100%'} borderTopLeftRadius={100} borderTopRightRadius={100}>
        <VStack justifyContent={'center'} alignItems={'center'}>
        <Heading size={'xl'} color={colors.fontColor}>Signup</Heading>
        </VStack>
        <VStack alignItems={'center'} marginY={20} >
        <FormControl.Label ml={'-60%'}>Email</FormControl.Label>
        <Input w={{
        base: "75%",
        md: "25%"
        }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />
        <FormControl.Label ml={'-60%'}>Password</FormControl.Label>
        <Input w={{
        base: "75%",
        md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />} placeholder="Password" />
        </VStack>
        <HStack justifyContent={'center'} alignItems={'center'}>
            <View style={styles.iconContainer}>
            <Mail/>
            </View>
            <View style={styles.iconContainer}>
            <Twitter/>
            </View>
            <View style={styles.iconContainer}>
            <Facebook/>
            </View>
         
        </HStack>
        <Button borderRadius={'xl'} backgroundColor={colors.btnColor} marginX={10} p={3}>
        NEXT
        </Button>
        <HStack justifyContent={'center'} mt={5} alignItems={'space-between'}>
            <Text>Already have an account?</Text>
            <Text ml={2} color={colors.fontColor}>SignIn</Text>
        </HStack>

    </Box>
    </VStack>

</Box>
}

export default Signup

const styles = StyleSheet.create({
    iconContainer:{
        borderWidth:1,
        borderColor:colors.btnColor,
        borderRadius:'100%',
        padding:5,
        marginHorizontal:3,
        shadowColor:'#FFFFFF',
        shadowOffset:{width:100,height:100},
        shadowOpacity:0.5,
        shadowRadius:10
    }
})