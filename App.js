import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SignupProduct from './screens/SignupProduct';
import CarouselScreen from './screens/CarouselScreen';
import VegetablesScreen from './screens/VegetablesScreen';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  Product: {
    screen: SignupProduct,
  },
  Carousel: {
    screen: CarouselScreen,
  },
  Vegetables: {
    screen: VegetablesScreen,
  },
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);