import { Heading, VStack,Text, Input } from "native-base"
import { TextInput,StyleSheet } from "react-native"
import CartButton from "../components/Cart/CartButton"
import colors from "../constants/colors"

const Feedback = () =>{
return <VStack bgColor={colors.sliderColor} flex={1} p="10" justifyContent={'space-between'}>
    <VStack>
    <Heading>Send Feedback</Heading>
    <Text>Tell us what you love about the app, or what we
could be doing better</Text>

    <TextInput style={styles.textInput} placeholder="Enter the Send Feedback" />
    </VStack>
    <CartButton txt="SUBMIT FEEDBACK"/>
</VStack>
}

export default Feedback

const styles = StyleSheet.create({
    textInput:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:colors.primary
    }
})