import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartIcon from '../images/icons/CartIcon';
import HomeIcon from '../images/icons/HomeIcon';
import LocationIcon from '../images/icons/LocationIcon';
import ProfileIcon from '../images/icons/ProfileIcon';
import Home from '../screens/Home';
import DrawerStack from './DrawerStack';

const Tab = createBottomTabNavigator();

const  BottomTabStack = () => {
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
      component={Home}
        options={{
          tabBarIcon:({focused})=><LocationIcon focused={focused} />
        }}
        />
      <Tab.Screen
       name="Cart" 
       component={Home} 
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