import { Box, Heading, View, VStack,FormControl,Input,Icon,Button, HStack,Checkbox,Body,Text } from "native-base"
import colors from "../constants/colors"
import LoginImg from "../images/LoginImg"
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet } from "react-native";


const Login = () =>{
return <Box backgroundColor={colors.primary}>
    <VStack>
        <View>
        <LoginImg marginLeft={40} marginTop={25}/>
        </View>
        <Box>
        <Box backgroundColor={colors.secondary} height={'90%'} borderTopLeftRadius={100} borderTopRightRadius={100}>
        <VStack justifyContent={'center'} alignItems={'center'}>
        <Heading size={'xl'} color={colors.fontColor}>JOIN US</Heading>
        </VStack>
        <HStack  marginTop={45} marginBottom={-30} marginLeft={18} justifyContent={"space-around"} marginRight={19} >
        <Input w={{
        base: "30%",
        md: "25%"
        }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={2} ml="1" color="muted.400" />} placeholder="First name" />
        <Input w={{
        base: "30%",
        md: "25%",
        }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={2} justifyContent={"space-between"} ml="1" color="muted.400" />} placeholder="Last name" />
        </HStack>

        <VStack alignItems={'center'} marginY={20} marginTop={45} marginBottom={45} >
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
        <FormControl.Label ml={"-45%"}>Confirm Password</FormControl.Label>
        <Input w={{
        base: "75%",
        md: "25%"
         }} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />} placeholder="Confirm Password" />

        </VStack>
       
        <Button borderRadius={'xl'} backgroundColor={colors.btnColor} marginX={10}  p={3}>
        NEXT
        </Button>
        <Checkbox isChecked colorScheme="green" marginLeft={18}>
               I agree with Privacy and Policy
            </Checkbox>
    

    </Box>
        </Box>

    </VStack>

</Box>
}


const styles = StyleSheet.create({

})

export default Login
