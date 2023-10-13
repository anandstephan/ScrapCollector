import { View, Text, VStack, HStack } from "native-base"
import Search from "../components/common/Search"
import ItemContainer from "../components/Home/ItemContainer"
import Slider from "../components/Home/Slider"
import color from "../constants/color"


const Home = () =>{
return <VStack bgColor={color.sliderColor} flex={1} >
        <Search/>
        <Slider/>
        <HStack justifyContent={'space-between'} alignItems={'center'} mx={5}>
        <Text>Materials</Text>
        <Text>See All</Text>
        </HStack>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
             <ItemContainer/>   
             <ItemContainer/>   
             <ItemContainer/>   
             <ItemContainer/>   
        </HStack>
</VStack>
}

export  default Home