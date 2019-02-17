import Login from "./Login"
import Splash from "./Splash"


import {createStackNavigator, createAppContainer} from "react-navigation"

const AppNavigator = createStackNavigator({
    // Screens
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    },
}, {
    // settings
    initialRouteName: "Splash"
})

export default createAppContainer(AppNavigator)