import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import AddressItemCart from '../screens/AddressItemCart';
import Home from '../screens/Home';
import PickupItemCartpItemCart from '../screens/PickupItemCart';
import BottomTabStack from './BottomStack';


const Stack = createStackNavigator();
const MainStack = () =>{

return   <Stack.Navigator
screenOptions={{
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}}

>
        <Stack.Screen name="HomeScreen" component={BottomTabStack} />
        <Stack.Screen name="Pickup" component={PickupItemCartpItemCart}/>
        <Stack.Screen name="AddressCart" component={AddressItemCart}/>
    </Stack.Navigator>
}

export default MainStack