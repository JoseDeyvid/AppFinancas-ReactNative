import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const StackNavigator = createStackNavigator()

const AuthRoutes = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="SignIn" component={SignIn} />
            <StackNavigator.Screen name="SignUp" component={SignUp} />
        </StackNavigator.Navigator>
    )
}

export default AuthRoutes;