import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";



const DrawerNavigator = () =>{
    
    const DrawerStack = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <DrawerDrawer.Screen name='Home' component={HomeNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator