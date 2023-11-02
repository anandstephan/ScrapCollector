import { View, Text, VStack, HStack,Button,Checkbox } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import ItemContainer from "../components/Home/ItemContainer"
import colors from "../constants/colors"
import { ScrollView,StyleSheet } from "react-native" 
import Bottle from "../images/Bottle";
import JapanCar from "../images/JapanCar"
import ItemDetailCard from "../components/Cart/ItemDetailCard";
import CartButton from "../components/Cart/CartButton"
import { useNavigation } from "@react-navigation/native";


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


const PickupItemCart = () => {
    const navigation =     useNavigation()
const onBtnHandler = () =>{

  navigation.navigate('AddressCart')
}

return <ScrollView style={styles.container}> 
     <VStack bgColor={colors.sliderColor} height={'100%'} marginTop={"12"} >
            <Search/>
        <Text style={{color:"#259E73", marginLeft:'2%', marginTop:'3%' }}> Select all Items</Text>
        <HStack>
        <Checkbox marginLeft={5} marginRight={5}  value="test" accessibilityLabel="This is a dummy checkbox" />
        </HStack>
        <VStack >
            {ItemArray.map(item => <ItemDetailCard key={item.id} {...item}/>)}
            </VStack>
            <CartButton txt="REQUEST PICK UP" onPressHandler={onBtnHandler}/>
    </VStack>
    </ScrollView>
    }
    const styles = StyleSheet.create({
        container:{
            backgroundColor:"#D6E8E1",
            height:"100%",
        },
        iconContainer:{
            borderColor:colors.btnColor,
            padding:5,
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


   

export default PickupItemCart