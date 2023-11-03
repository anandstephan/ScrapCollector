import { View, Text, VStack, HStack,Button,Checkbox } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import ItemContainer from "../components/Home/ItemContainer"
import colors from "../constants/colors"
import { ScrollView,StyleSheet } from "react-native" 
import Bottle from "../images/Bottle";
import JapanCar from "../images/JapanCar"
import { AntDesign } from '@expo/vector-icons';
import ItemDetailCard from "../components/Cart/ItemDetailCard"
const ItemArray = [{
    id:1,
    pname:"Glass Bottle",
    pprice:4,
    pqty:30
},{
    id:2,
    pname:"Japanse Cars",
    pprice:124,
    pqty:300 
}]
    
const AddressItemCart = () => {
    
    return <ScrollView style={styles.container}> 
     <VStack bgColor={colors.sliderColor} height={'100%'} marginTop={"12"} >
            <Search/>
        <Text style={{color:"#259E73", marginLeft:'35%', marginTop:'5'}}> ITEMS ADDED </Text>
            
            <VStack >
            {ItemArray.map(item => <ItemDetailCard key={item.id} {...item}/>)}
            <Button bgColor={"#5ceab7"} borderRadius="xl" marginX={15} p={5} marginY={8} >
            <Text style={{color:'#5AD199', justifyContent:'space-between', alignContent:'space-between' }}>
            <AntDesign name="pluscircleo" size={20} color="#5AD199" />
              Add more items
            </Text>

        </Button>

            <Button borderRadius={'xl'} borderWidth={1} bgColor={colors.sliderColor} marginX={15} p={4}
            marginY={8}
            >
                <Text style={{color:'#259E73'}}>Select Address at next step
                <AntDesign name="caretright" size={20} color="#259E73" />
                </Text>
               
        </Button>
            </VStack>
            
    </VStack>
    </ScrollView>
    }

    const styles = StyleSheet.create({
        container:{
            backgroundColor:"#D6E8E1",
            height:"100%",
        },
        iconContainer:{
            // borderWidth:1,
            borderColor:colors.btnColor,
            // borderRadius:'100%',
            padding:2,
            marginHorizontal:3,
            shadowColor:'#FFFFFF',
            shadowOffset:{width:100,height:100},
            shadowOpacity:0.5,
            shadowRadius:10
        },
        text:{
            color:'#259E73',
            marginLeft:"10%",
        }
    })

export default AddressItemCart