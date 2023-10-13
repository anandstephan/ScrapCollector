import { HStack,Box, VStack, Heading, View,Text } from "native-base"
import Cloud from "../../images/Cloud"
import Coin from "../../images/Coin"
import Recyle from "../../images/Recycle"
import { StyleSheet } from "react-native"

const Card = () =>{
return <Box p={10} mx={7}  backgroundColor={'#8DB1A1'} borderRadius={30} mt={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} >
        <VStack justifyContent={'center'} alignItems={'center'}>
        <Coin/>
        <Heading color="#FFFFFF">5669</Heading>
        <Text color={'#FFFFFF'}>POINTS</Text>
        </VStack>
        <View style={styles.line}/>
        <VStack justifyContent={'center'} alignItems={'center'}>
        <Cloud/>
        <Heading color="#FFFFFF">500g</Heading>
        <Text color="#FFFFFF">saved oxygen</Text>
        </VStack>
        <View style={styles.line}/>
        <VStack justifyContent={'center'} alignItems={'center'}>
        <Recyle/>
        <Heading color="#FFFFFF">24*7</Heading>
        <Text color="#FFFFFF">Recycle</Text>
        </VStack>
   
    </HStack>
</Box>
}

export default Card

const styles = StyleSheet.create({
    line:{
        borderWidth:1,
        borderColor:"#FFFFFF",
        height:80
    }
})