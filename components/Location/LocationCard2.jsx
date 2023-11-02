import { HStack,Box, VStack, Heading, View,Text, Button } from "native-base"
import { StyleSheet,ImageBackground } from "react-native"
import LocationImg2 from "../../images/LocationImg2"

const LocationCard2 = () =>{
return <Box p={5} mx={7}  backgroundColor={'#C1DFD1'} borderRadius={10} mt={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} >

        <VStack>
        <Heading size={'xs'}>Find fastest tracks</Heading>
            <LocationImg2/>
        </VStack>

        <ImageBackground
        resizeMode="cover"
        source={require('../../images/background.png')}
        style={styles.backgroundPic}
        >
            <VStack ml={20} mt={5}>
            <Button  backgroundColor={'#5AD199'} mx={'12%'} borderRadius={10}  mb={5} p={1}>
            <Text color="#FFFFFF">Enter Your Location</Text>
            </Button>
            <Button  backgroundColor={'#FFFFFF'} mx={'9%'} borderRadius={10} p={1} >
            <Text color="#000">Take me to nearest bin</Text>
            </Button>
             </VStack>
      
        </ImageBackground>

        <VStack>
            
        </VStack>

    </HStack>
</Box>
}

export default LocationCard2


const styles =  StyleSheet.create({
    backgroundPic:{
        width:"100%",
        height:"100%",
        marginLeft:-100
    }
})
