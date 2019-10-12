import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginNavigator from '../navigator/LoginNavigator';
import AuthStack from '../navigator/AfterLoginNavigator';


const RootNavigator = createStackNavigator({
    Login: {
        screen: LoginNavigator,
    },
    AuthStack: {
        screen: AuthStack,
    },
}, {
        headerMode: 'none',
    });

export default createAppContainer(RootNavigator);