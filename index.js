/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import AppStackNavigator from './components/AppStackNavigator';
import Signup from './components/Signup/Signup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStackNavigator);
