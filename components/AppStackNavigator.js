import Login from "./Login/Login";
import Splash from "./Splash/Splash";
import Search from "./Search/Search";
import LoginForm from "./Login/LoginForm";
import Gateway from "./Gateway/Gateway";
import Signup from './Signup/Signup';
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
        screen: Search,
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
    initialRouteName: "Search"
})

export default createAppContainer(AppNavigator)