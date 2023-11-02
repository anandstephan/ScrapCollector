import { View, Text, VStack, HStack,Button,Checkbox } from "native-base"
import Search from "../components/common/Search"
import ItemContainer from "../components/Home/ItemContainer"
import colors from "../constants/colors"
import { ScrollView,StyleSheet } from "react-native" 
import Bottle from "../images/Bottle";
import JapanCar from "../images/JapanCar"
import CartButton from "../components/Cart/CartButton";
import ItemDetailCard from "../components/Cart/ItemDetailCard";
import { useNavigation } from "@react-navigation/native";
const ItemArray = [ {
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
    
const Cart = () => {
    const navigation =     useNavigation()

    const onBtnHandler = () =>{
        navigation.navigate('Pickup')
    }


    return <ScrollView style={styles.container}> 
     <VStack bgColor={colors.sliderColor} height={'100%'} marginTop={"12"} >
            <Search/>
            <Text style={{fontSize:17, marginLeft:"10%"}}>Subtotal= 583.00/-</Text>
            <Text style={styles.text}>Term and conditions</Text>
            <CartButton txt="Proceed the order of 5 items" onPressHandler={onBtnHandler}/>
        <Text style={{color:"#259E73", marginLeft:'2%'}}> Select all Items</Text>
        <HStack>
        <Checkbox marginLeft={'4'} value="test" accessibilityLabel="This is a dummy checkbox" />

        </HStack>
            
        <VStack >
            
            {ItemArray.map(item => <ItemDetailCard key={item.id} {...item}/>)}
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

export default Cart