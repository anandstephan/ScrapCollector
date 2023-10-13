import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import Home from '../screens/Home';
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
    </Stack.Navigator>
}

export default MainStack