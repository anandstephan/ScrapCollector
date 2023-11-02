import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { Text } from 'native-base';
import SidebarHeader from '../components/common/SidebarHeader';
import colors from '../constants/colors';
import Location from '../screens/Location';
import { useRoute } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const route = useRoute()
  console.log("🚀 ~ file: DrawerStack.js:12 ~ DrawerStack ~ route:", route.params.screenName)
  return (
    <Drawer.Navigator
    screenOptions={{
        drawerStyle:{
          backgroundColor:colors.drawerBackgroundColor,

              
        },
        drawerContentContainerStyle:{
          flex:1,
          flexDirection:"column",
          justifyContent:"center"
          
        },
        drawerLabelStyle:{
          fontSize:20,
          fontWeight:400,
        },

        headerStyle:{backgroundColor:colors.sliderColor},
        headerStatusBarHeight:5,
        headerTitle:"",
        headerRight:()=><SidebarHeader/>,
    }}
    initialRouteName={route.params.screenName}
    >
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="Location" component={Location}/>
      <Drawer.Screen name="History" component={Home} />
      <Drawer.Screen name="AboutUs" component={Home}/>
      <Drawer.Screen name="Logout" component={Home}/>
      <Drawer.Screen name="Cart" component={Location}/>
    </Drawer.Navigator>
  );
}

export default DrawerStack