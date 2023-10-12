import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import DrawerStack from './DrawerStack';

const Tab = createBottomTabNavigator();

const  BottomTabStack = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Tab.Screen name="Home" component={DrawerStack} />
      <Tab.Screen name="Location" component={Home} />
      <Tab.Screen name="Cart" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}

export default BottomTabStack