import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import OnBoarding from '../screens/OnBoarding';


const Stack = createStackNavigator();
const LoginStack = () =>{

return   <Stack.Navigator
screenOptions={{
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}}

>
        <Stack.Screen name="SignupScreen" component={Signup}/>
        {/* <Stack.Screen name="LoginScreen" component={Login} /> */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
        {/* <Stack.Screen name="Cart" component={Cart} /> */}
        {/* <Stack.Screen name="Cart" component={Cart2}/> */}
       {/* <Stack.Screen name="Cart" component={Cart3}/> */}
       
    </Stack.Navigator>
}

export default LoginStack