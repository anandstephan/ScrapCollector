import { HStack,Box, VStack, Heading, View,Text, Button } from "native-base"
import { StyleSheet } from "react-native"
import LocationImg3 from "../../images/LocationImg3"
import color from "../../constants/color"

const LocationCard3 = () =>{
return <Box p={5}  backgroundColor={color.sliderColor} borderRadius={10} mt={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} >
    <Box bgColor={'#FFFFFF'} borderRadius={10} p={2}>
    <LocationImg3/>
    </Box>

    <VStack mx={2}>
        <Heading size={'xs'}>Recycle or sell your scrap</Heading>
        <Text>sell your waste at your doorstep</Text>
    <HStack justifyContent={'space-between'} alignItems={'center'} w={150} >
        <Button backgroundColor={color.btnColor} borderRadius={100} p={2}>
            <Text color="#FFFFFF">Schedule</Text>
        </Button>
        <Button backgroundColor={color.sliderColor} borderRadius={100} p={2} mx={2} borderWidth={1} borderColor={color.btnColor}>
            <Text color={color.btnColor}>Scan</Text>
        </Button>
    </HStack>
    </VStack>

    
    </HStack>
</Box>
}

export default LocationCard3

const styles = StyleSheet.create({
    line:{
        borderWidth:1,
        borderColor:"#FFFFFF",
        height:80
    }
})