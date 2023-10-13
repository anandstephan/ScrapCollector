import { View, Text, VStack, HStack } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import ItemContainer from "../components/Home/ItemContainer"
import Slider from "../components/Home/Slider"
import color from "../constants/color"


const Home = () =>{
return <VStack bgColor={color.sliderColor} flex={1} >
        <Search/>
        <Slider/>
        <HStack justifyContent={'space-between'} alignItems={'center'} mx={5}>
        <Text color={color.fontColor}>Materials</Text>
        <Text color={color.fontColor}>See All</Text>
        </HStack>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
             <ItemContainer/>   
             <ItemContainer/>   
             <ItemContainer/>   
             <ItemContainer/>   
        </HStack>
        <Card/>
</VStack>
}

export  default Home