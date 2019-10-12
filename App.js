import React, { Component } from 'react';
import { View, Text } from 'react-native';

import RootNavigator from './src/navigator/RootNavigator';

export default class App extends Component {
  render() {
    return <RootNavigator />
  }
}
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { Share, alert } from 'react-native';
// import { Icon } from 'native-base';
// import Login from './src/screens/Login';
// import ForYou from './src/screens/ForYou';
// import DetailWebToon from './src/screens/DetailWebToon';

// const onShare = async () => {
//   try {
//     const result = await Share.share({
//       message: 'Halo welcome to Mywebtoon',
//     });

//     if (result.action === Share.sharedAction) {
//       if (result.activityType) {
//         Alert.alert('yes');
//       } else {
//         Alert.alert('no');
//       }
//     } else if (result.action === Share.dismissedAction) {
//       Alert.alert('okey');
//     }
//   } catch (error) {
//     Alert.alert(error.message);
//   }
// };
// const AuthStack = createStackNavigator({
//   ForYou: {
//     screen: ForYou,
//     navigationOptions: {
//       title: 'For You',
//       header: null,
//       cardStack: {
//         gesturesEnabled: false,
//       },
//     },
//   },
//   DetailWebToon: {
//     screen: DetailWebToon,
//     navigationOptions: {
//       headerTitle: 'The Secret Of Angel',
//       headerRight: <Icon light name="share" onPress={onShare} />,
//       headerStyle: {
//         backgroundColor: '#ff9800',
//       },
//       headerRightContainerStyle: {
//         marginEnd: 15,
//       },
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerTintColor: '#fff',
//     },
//   },
// });


// const AppNavigator = createSwitchNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       title: 'Login',
//       header: null,
//     },
//   },
//   Auth: {
//     screen: AuthStack,
//   },
// });

// export default createAppContainer(AppNavigator);