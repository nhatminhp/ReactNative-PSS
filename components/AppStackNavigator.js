import Login from "./Login";
import Splash from "./Splash";
import Test from "./Test";
import LoginForm from "./LoginForm";
import Gateway from "./Gateway";
import Signup from './Signup';
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
    Signup: {
        screen: Signup
    }
}, {
    // settings
    initialRouteName: "Splash"
})

export default createAppContainer(AppNavigator)