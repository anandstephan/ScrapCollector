import { View, Text, VStack, HStack,Button,Checkbox } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import ItemContainer from "../components/Home/ItemContainer"
import color from "../constants/color";
import colors from "../constants/colors"
import { ScrollView,StyleSheet } from "react-native" 
import Bottle from "../images/Bottle";
import JapanCar from "../images/JapanCar"
    
const Cart2 = () => {
    
    return <ScrollView style={styles.container}> 
     <VStack bgColor={color.sliderColor} height={'100%'} marginTop={"12"} >
            <Search/>
        <Text style={{color:"#259E73", marginLeft:'2%', marginTop:'3%' }}> Select all Items</Text>
        <HStack>
        <Checkbox marginLeft={5} marginRight={5}  value="test" accessibilityLabel="This is a dummy checkbox" />
        </HStack>
        <VStack >
            
            <HStack marginTop={15}  justifyContent={'space-evenly'} mx="2" >
            <Bottle/>
            <VStack>
            <Text style={{fontSize:17}}> Glass Bottle  </Text>
            <Text style={{ color:'#259E73'}}>₹ 4.00 Per piece </Text>
            <Text style={{ color:'#259E73'}}>3 Point</Text>
            </VStack>
            </HStack>


        
            <HStack marginTop={50} justifyContent={'space-between'} mx="2">
                <JapanCar />
                <VStack>
                    <Text style={{ fontSize:17 }}> Japanese Car </Text>
                    <Text style={{ color: '#259E73' }}> Depends on condition </Text>
                    <Text style={{ color: '#259E73' }}> 350 Points </Text>
                </VStack>
            </HStack>
            </VStack>
            <Button borderRadius="xl" backgroundColor={colors.btnColor} marginX={18} p={3}
            marginY={14} 
            >
            REQUEST PICK UP
        </Button>
        
            
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

export default Cart2