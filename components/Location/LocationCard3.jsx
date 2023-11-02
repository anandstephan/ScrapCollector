import { HStack,Box, VStack, Heading, View,Text, Button } from "native-base"
import { StyleSheet } from "react-native"
import LocationImg3 from "../../images/LocationImg3"
import colors from "../../constants/colors"

const LocationCard3 = () =>{
return <Box p={5}  backgroundColor={colors.sliderColor} borderRadius={10} mt={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} >
    <Box bgColor={'#FFFFFF'} borderRadius={10} p={2}>
    <LocationImg3/>
    </Box>

    <VStack mx={2}>
        <Heading size={'xs'}>Recycle or sell your scrap</Heading>
        <Text>sell your waste at your doorstep</Text>
    <HStack justifyContent={'space-between'} alignItems={'center'} w={150} >
        <Button backgroundColor={colors.btnColor} borderRadius={100} p={2}>
            <Text color="#FFFFFF">Schedule</Text>
        </Button>
        <Button backgroundColor={colors.sliderColor} borderRadius={100} p={2} mx={2} borderWidth={1} borderColor={colors.btnColor}>
            <Text color={colors.btnColor}>Scan</Text>
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