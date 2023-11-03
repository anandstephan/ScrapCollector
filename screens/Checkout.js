import {  Center, Heading, HStack, VStack,Text } from "native-base"
import { Image,StyleSheet } from "react-native"
import CartButton from "../components/Cart/CartButton"
import colors from "../constants/colors"

const Checkout = () => {
return <VStack bgColor={colors.sliderColor} flex={1}  >
    <Center mt="10">
    <Image source={require('../images/bigCircle.png')}  alt="Image" style={style.firstImage}/>
    <Image source={require('../images/smallCircle.png')}  alt="Image" style={style.secondImage}/>
    <Image source={require('../images/check.png')}  alt="Image" style={style.thridImage}/>
    </Center>
    <Center mt="10">
    <Heading size={'2xl'} color={colors.fontColor}>BILL DETAILS</Heading>
    <Heading size={'xs'}>31 August 2023 • 09:30:00 WIB • No ref </Heading>
    <Heading size={'xs'}>181022S00069</Heading>
    <Heading size={'sm'} mt={3}>Unique Code</Heading>
    <Heading size={'2xl'} color={colors.fontColor}>S-069 666</Heading>
    <Image source={require('../images/qrcode.png')}/>
    </Center>
    <VStack mt={5}>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Account Name</Text>
            <Text>Puan@dpr.ri</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Account No</Text>
            <Text>RP-K1-00001</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Phone Number</Text>
            <Text>+62 202 555 0142</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Email </Text>
            <Text>Puan@dpr.ri</Text>
        </HStack>
    </VStack>
    <VStack mt={5}>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Object 1</Text>
            <Text>120RP</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Object 2</Text>
            <Text>120RP</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Object 3</Text>
            <Text>120RP</Text>
        </HStack>
        <HStack justifyContent={'space-between'} mx={10}> 
            <Text>Object 4</Text>
            <Text>120RP</Text>
        </HStack>
    </VStack>
    <Text mx={10} mt={2}>Notes</Text>
    <CartButton txt={'Track Driver'} />
</VStack>
}

export default Checkout

const style = StyleSheet.create({
    firstImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain', // Adjust this based on your requirements
      },
      secondImage: {
        position: 'absolute',
        top: 25, // Adjust the positioning as needed
        left: 145,
        width: 100,
        height: 100,
        resizeMode: 'contain', // Adjust this based on your requirements
      },
      thridImage: {
        position: 'absolute',
        top: 45, // Adjust the positioning as needed
        left: 167,
        width: 50,
        height: 50,
        resizeMode: 'contain', // Adjust this based on your requirements
      },
    
})