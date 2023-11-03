import { VStack } from "native-base"
import Card from "../components/About/Card"
import colors from "../constants/colors"

const About = () =>{
return <VStack bgColor={colors.sliderColor} flex={1}>
    <Card text="Terms of Service"/>
    <Card text="App Version"/>
    <Card text="Licenses and Registrations"/>
</VStack>
}

export default About