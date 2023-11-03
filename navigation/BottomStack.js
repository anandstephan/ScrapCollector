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
const Tab = createBottomTabNavigator();

const  BottomTabStack = () => {
  const navigation = useNavigation()
  const drawerScreenOptions = {
    customProp: 'YourValue', // Pass the desired prop here
  };
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
      initialParams={{
        screenName:"Home"
      }}
       />
      <Tab.Screen
       name="Location"
      component={DrawerStack}
        options={{
          tabBarIcon:({focused})=><LocationIcon focused={focused} />
        }}
        initialParams={{
          screenName:"Location"
        }}

        />
          <Tab.Screen
       name="Main"
      component={DrawerStack}
        options={{
          tabBarIcon:({focused})=> <View style={{backgroundColor:colors.btnColor,height:80,width:80,justifyContent:'center',alignItems:"center",borderRadius:100,marginTop:-10}}><MainIcon focused={focused} /></View>,
        }}
        initialParams={{
          screenName:"Location"
        }}
        />
      <Tab.Screen
       name="Cart" 
       component={DrawerStack} 
       options={{
        tabBarIcon:({focused})=><CartIcon focused={focused}/>
      }}
      initialParams={{
        screenName:"Cart"
      }}
       />
      <Tab.Screen
       name="Profile" 
       component={DrawerStack}
        options={{
        tabBarIcon:({focused})=><ProfileIcon focused={focused}/>
      }}
      initialParams={{
        screenName:"Profile"
      }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabStack