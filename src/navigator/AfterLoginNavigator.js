import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { Share, alert } from 'react-native';
import { Icon } from 'native-base';

import ForYou from './../screens/ForYou';


const AuthStack = createStackNavigator({
    ForYou: {
        screen: ForYou,
        navigationOptions: {
            title: 'For You',
            header: null,
            cardStack: {
                gesturesEnabled: false,
            },
        },
    },
    // DetailWebToon: {
    //     screen: DetailWebToon,
    //     navigationOptions: {
    //         headerTitle: 'The Secret Of Angel',
    //         headerRight: <Icon light name="share" onPress={onShare} />,
    //         headerStyle: {
    //             backgroundColor: '#ff9800',
    //         },
    //         headerRightContainerStyle: {
    //             marginEnd: 15,
    //         },
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },
    //         headerTintColor: '#fff',
    //     },
    // },
});

export default createAppContainer(AuthStack);