import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';
import CartIcon from '../images/icons/CartIcon';
import HomeIcon from '../images/icons/HomeIcon';
import LocationIcon from '../images/icons/LocationIcon';
import MainIcon from '../images/icons/MainIcon';
import ProfileIcon from '../images/icons/ProfileIcon';
import SelectItemCart from '../screens/SelectItemCart';
import Home from '../screens/Home';
import Location from '../screens/Location';
import DrawerStack from './DrawerStack';
import colors from '../constants/colors';
console.log(colors)
const Tab = createBottomTabNavigator();

const  BottomTabStack = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false
    }}
    >
      <Tab.Screen
       name="Home"
      component={DrawerStack}
      options={{
        tabBarIcon:({focused})=><HomeIcon focused={focused}/>,
        
      }}
       />
      <Tab.Screen
       name="Location"
      component={Location}
        options={{
          tabBarIcon:({focused})=><LocationIcon focused={focused} />
        }}
        />
          <Tab.Screen
       name="Main"
      component={Home}
        options={{
          tabBarIcon:({focused})=> <View style={{backgroundColor:colors.btnColor,height:80,width:80,justifyContent:'center',alignItems:"center",borderRadius:"100%",marginTop:-10}}><MainIcon focused={focused} /></View>,
        }}
        />
      <Tab.Screen
       name="Cart" 
       component={SelectItemCart} 
       options={{
        tabBarIcon:({focused})=><CartIcon focused={focused}/>
      }}
       />
      <Tab.Screen
       name="Profile" 
       component={Home}
        options={{
        tabBarIcon:({focused})=><ProfileIcon focused={focused}/>
      }}/>
    </Tab.Navigator>
  );
}

export default BottomTabStack