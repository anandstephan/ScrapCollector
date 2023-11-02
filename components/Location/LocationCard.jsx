import { HStack,Box, VStack, Heading, View,Text } from "native-base"
import Cloud from "../../images/Cloud"
import Coin from "../../images/Coin"
import Recyle from "../../images/Recycle"
import { StyleSheet } from "react-native"
import LocationImg from "../../images/LocationImg"

const LocationCard = () =>{
return <Box p={5} mx={7}  backgroundColor={'#8DB1A1'} borderRadius={10} mt={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} >
    <LocationImg/>
    <VStack ml={4}>
        <Text>150m|3m</Text>
        <Heading size={'xs'}>Central Park D Block</Heading>
        <Text>20% of space available</Text>
    <HStack justifyContent={'space-between'} alignItems={'center'} w={'55%'}>
        <Text>Plastic</Text>
        <Text>Glass</Text>
    </HStack>
    </VStack>

    
    </HStack>
</Box>
}

export default LocationCard

const styles = StyleSheet.create({
    line:{
        borderWidth:1,
        borderColor:"#FFFFFF",
        height:80
    }
})