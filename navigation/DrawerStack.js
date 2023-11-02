import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { Text } from 'native-base';
import SidebarHeader from '../components/common/SidebarHeader';
import colors from '../constants/colors';
import Location from '../screens/Location';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerStyle:{backgroundColor:colors.sliderColor},
        headerStatusBarHeight:5,
        headerTitle:"",
        headerRight:()=><SidebarHeader/>,
    }}
    
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Home} />
      <Drawer.Screen name="History" component={Home} />
      <Drawer.Screen name="AboutUs" component={Home}/>
      <Drawer.Screen name="Logout" component={Home}/>
      <Drawer.Screen name="Location1" component={Location}/>
    </Drawer.Navigator>
  );
}

export default DrawerStack