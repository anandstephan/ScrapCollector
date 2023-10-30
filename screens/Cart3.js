import { View, Text, VStack, HStack,Button,Checkbox } from "native-base"
import Search from "../components/common/Search"
import Card from "../components/Home/Card"
import ItemContainer from "../components/Home/ItemContainer"
import color from "../constants/color";
import colors from "../constants/colors"
import { ScrollView,StyleSheet } from "react-native" 
import Bottle from "../images/Bottle";
import JapanCar from "../images/JapanCar"
import { AntDesign } from '@expo/vector-icons';

    
const Cart3 = () => {
    
    return <ScrollView style={styles.container}> 
     <VStack bgColor={color.sliderColor} height={'100%'} marginTop={"12"} >
            <Search/>
        <Text style={{color:"#259E73", marginLeft:'35%', marginTop:'5'}}> ITEMS ADDED </Text>
            
            <VStack >
            
            <HStack marginTop={15} justifyContent={'space-evenly'} mx="2" >
            <Bottle/>
            <VStack>
            <Text style={{fontSize:17}}> Glass Bottle  </Text>
            <Text style={{ color:'#259E73'}}>₹ 4.00 Per piece </Text>
            <Text style={{ color:'#259E73'}}>3 Point</Text>
            </VStack>
            </HStack>


        
            <HStack marginTop={42} marginBottom={-1} justifyContent={'space-between'} mx="2">
                <JapanCar />
                <VStack>
                    <Text style={{ fontSize:17 }}> Japanese Car </Text>
                    <Text style={{ color: '#259E73' }}> Depends on conditions </Text>
                    <Text style={{ color: '#259E73' }}> 350 Points </Text>
                </VStack>
            </HStack>
            <Button bgColor={"#5ceab7"} borderRadius="xl" marginX={15} p={5} marginY={8} >
            <Text style={{color:'#5AD199', justifyContent:'space-between', alignContent:'space-between' }}>
            <AntDesign name="pluscircleo" size={20} color="#5AD199" />
              Add more items
            </Text>

        </Button>

            <Button borderRadius="xl" borderWidth={1} bgColor={color.sliderColor} marginX={15} p={4}
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

export default Cart3