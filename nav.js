import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import NewAccountScreen from './screens/NewAccountScreen'


const screens = { 
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    CreateAccount: {
        screen: CreateAccountScreen
    },
    NewAccount: {
        screen: NewAccountScreen
    },
}


const nav = createStackNavigator(screens);
export default createAppContainer(nav)