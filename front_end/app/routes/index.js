import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ReportScreen from 'features/ReportScreen';
import LoginScreen from 'features/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';



// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({Home: ReportScreen});
const AuthStack = createStackNavigator({SignIn: LoginScreen});

export default createAppContainer(
  createBottomTabNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
