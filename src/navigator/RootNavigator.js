
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Share, Alert } from 'react-native';
import { Icon } from 'native-base';
import Login from './../screens/Login';
import ForYou from './../screens/ForYou';
import DetailWebtoon from './../screens/DetailWebtoon';
import DetailEpisode from './../screens/DetailEpisode';

const onShare = async () => {
    try {
        const result = await Share.share({
            message: 'Halo welcome to Mywebtoon',
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                Alert.alert('yes');
            } else {
                Alert.alert('no');
            }
        } else if (result.action === Share.dismissedAction) {
            Alert.alert('okey');
        }
    } catch (error) {
        Alert.alert(error.message);
    }
};
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
    DetailWebtoon: {
        screen: DetailWebtoon,
        navigationOptions: {
            headerTitle: 'The Secret Of Angel',
            headerRight: <Icon name="share" onPress={onShare} />,
            headerStyle: {
                backgroundColor: '#ff9800',
            },
            headerRightContainerStyle: {
                marginEnd: 15,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: '#fff',
        },
    },
    DetailEpisode: {
        screen: DetailEpisode,
        navigationOptions: {
            headerTitle: 'Episode 1',
            headerRight: <Icon name="share" onPress={onShare} />,
            headerStyle: {
                backgroundColor: '#ff9800',
            },
            headerRightContainerStyle: {
                marginEnd: 15,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: '#fff',
        },
    },

});


const RootNavigator = createSwitchNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            header: null,
        },
    },
    Auth: {
        screen: AuthStack,
    },
});

export default createAppContainer(RootNavigator);