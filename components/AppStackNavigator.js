import Login from "./Login";
import Splash from "./Splash";
import Test from "./Test";
import LoginForm from "./LoginForm";
import Gateway from "./Gateway";
import {createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    // Screens
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    },
    Search: {
        screen: Test,
    },
    LoginForm: {
        screen: LoginForm
    },
    Gateway: {
        screen: Gateway
    },
}, {
    // settings
    initialRouteName: "Gateway"
})

export default createAppContainer(AppNavigator)