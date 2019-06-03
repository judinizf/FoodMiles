import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./screen";

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
  })
);

export default Routes;

AppRegistry.registerComponent(appName, () => Routes);