import { HStack, ScrollView, Text, View,Button } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import LocationCard from "../components/Location/LocationCard"
import LocationCard2 from "../components/Location/LocationCard2"
import LocationCard3 from "../components/Location/LocationCard3"
import color from "../constants/color"

const Location = () =>{
return <ScrollView bgColor={color.sliderColor} flex={1}>
    <Search/>
        <HStack justifyContent={'space-between'} px={5}>
            <Text bold>Nearby bin station</Text>
            <Text>Show All</Text>
        </HStack>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
        <Button backgroundColor={'#FFFFFF'} borderRadius={100} mx={120} mt={5}>
        <Text color="#000000"> See All</Text>
        </Button>
        <LocationCard2/>
        <LocationCard3/>
        <Card/>
    </ScrollView>
}

export default Location