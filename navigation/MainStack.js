import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import About from '../screens/About';
import AddressItemCart from '../screens/AddressItemCart';
import Challenge from '../screens/Challenge';
import Checkout from '../screens/Checkout';
import Feedback from '../screens/Feedback';
import Logout from '../screens/Logout';
import PickupItemCartpItemCart from '../screens/PickupItemCart';
import ProfileDetailUpdate from '../screens/ProfileDetailUpdate';
import Report from '../screens/Report';
import BottomTabStack from './BottomStack';


const Stack = createStackNavigator();
const MainStack = () =>{
return   <Stack.Navigator
screenOptions={{
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}}
>
        {/* <Stack.Screen name="HomeScreen" component={BottomTabStack} />
        <Stack.Screen name="Pickup" component={PickupItemCartpItemCart}/>
        <Stack.Screen name="AddressCart" component={AddressItemCart}/>
        <Stack.Screen name="ProfileUpdate" component={ProfileDetailUpdate}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="Report" component={Report}/>
        <Stack.Screen name="Logout" component={Logout}/> */}
        {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
        <Stack.Screen name="Challenge" component={Challenge} />
    </Stack.Navigator>
}

export default MainStack