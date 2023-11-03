import { Heading, ScrollView, Text } from "native-base"
import Card from "../components/Challenge/Card"
import colors from "../constants/colors"

const list = [
    {primaryTxt:"Glass bottles pickup",secondaryTxt:"100Points | 09:04:32 left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
    {primaryTxt:"E-waste pickup",secondaryTxt:"500Points | 2days left"},
]

const Challenge = () =>{
return <ScrollView flex={1} bgColor={colors.sliderColor}>
    <Heading mx={5}>Challenge</Heading>
    <Text ml={4} color={colors.fontColor}>Complete challenges daily to level up & win awesome rewards!</Text>
    {list.map((item,idx) => <Card primaryTxt={item.primaryTxt} secondaryTxt={item.secondaryTxt} />)}
</ScrollView>
}

export default Challenge