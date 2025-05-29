import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home"


const DrawerNavigator = createDrawerNavigator()

const AppRoutes = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Home} />
        </DrawerNavigator.Navigator>
    )
}

export default AppRoutes;