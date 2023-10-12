import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerStack