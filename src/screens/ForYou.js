import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {
    Container,
    Text,
    View,
    Icon,
    Item,
    Label,
    Input,
    Button,
    Content,
} from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Slideshow from 'react-native-image-slider-show';
import Favourite from './Favourite';
import Profile from './Profile';
class ForYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            banners: [
                {
                    title: 'The Secret of Angel',
                    url: require('./../image/1.png')
                },
                {
                    title: 'Young daddy',
                    url: require('./../image/3.jpg')
                },
                {
                    title: 'Pasutri kok bisa',
                    url: require('./../image/2.png')
                },
                {
                    title: 'Old Mom',
                    url: require('./../image/4.jpg')
                },
                {
                    title: 'Young Lady',
                    url: require('./../image/5.png')
                },
            ],
        };
    }

    UNSAFE_componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position:
                        this.state.position === this.state.banners.length
                            ? 0
                            : this.state.position + 1,
                });
            }, 3000),
        });
    }

    UNSAFE_componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        console.disableYellowBox = true

        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.viewContent}>
                        <View style={styles.viewHeader}>
                            <Item style={styles.inputText} regular>
                                <Input placeholder="search" />
                                <Icon active name="search" />
                            </Item>
                            <Item style={styles.banners}>
                                <Slideshow
                                    containerStyle={styles.itemSliderImage}
                                    dataSource={this.state.banners}
                                    position={this.state.position}
                                    indicatorSelectedColor="#ff9800"
                                    indicatorColor="#f0edf6"
                                    onPositionChanged={position => this.setState({ position })}
                                />
                            </Item>
                        </View>
                        <SafeAreaView>
                            <View style={styles.favourite}>
                                <Text style={styles.textSubTitle}>Favourite</Text>
                            </View>
                            <View style={styles.favWebtoon}>
                                <FlatList
                                    style={styles.itemMt}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.banners}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebToon')}>
                                            <View style={styles.favItem}>
                                                <Image
                                                    style={{ width: 100, height: 100, borderWidth: 3, borderColor: '#795548' }}
                                                    source={item.url}
                                                />
                                                <Text style={styles.favoriteTitle}>{item.title}</Text>
                                            </View></TouchableOpacity>
                                    )}
                                    keyExtractor={item => item}
                                />
                            </View>
                            <View style={styles.addfav}>
                                <Text style={styles.textSubTitle}>All</Text>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.banners}
                                    renderItem={({ item }) => (
                                        <View style={styles.viewAddFav}>
                                            <Image
                                                style={{ width: 60, height: 60, borderWidth: 3, borderColor: '#795548' }}
                                                source={item.url}
                                            />
                                            <View style={styles.viewListItem}>
                                                <Text>{item.title}</Text>
                                                <Button warning style={styles.btnFavorite}><Text> + Favorite </Text></Button>
                                            </View>
                                        </View>
                                    )}
                                    keyExtractor={item => item}
                                />
                            </View>
                        </SafeAreaView>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    viewContent: {
        width: '100%',
    },
    viewHeader: {
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    inputText: {
        width: '90%',
        marginTop: 10,
        marginBottom: 15,
    },
    banners: {
        width: '90%',
        marginBottom: 15,
    },
    itemSliderImage: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'grey',
    },
    favourite: {
        width: '90%',
        alignItems: 'center'
    },
    textSubTitle: {
        width: '90%',
        fontSize: 17,
        fontWeight: 'bold'

    },
    itemMt: {
        marginBottom: 10,
    },
    favItem: {
        marginStart: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    addfav: {
        width: '90%',
        alignItems: 'center'
    },
    viewAddFav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 15,
        marginLeft: 10,
        width: '100%'
    },
    viewListItem: {
        marginStart: 10,
        width: '100%'
    },
    btnFavorite: {
        height: 25,
        marginTop: 10,
        width: 120,
    },

})

const TabNavigator = createMaterialBottomTabNavigator(
    {
        ForYou: {
            screen: ForYou,
            navigationOptions: {
                tabBarLabel: 'ForYou',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'apps'} />
                    </View>
                ),
            },
        },
        Favourite: {
            screen: Favourite,
            navigationOptions: {
                tabBarLabel: 'Favourite',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'star'} />
                    </View>
                ),
                activeColor: '#795548',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: "#ff9800" },
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'person'} />
                    </View>
                ),
                activeColor: '#795548',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: "#ff9800" },
            },
        },
    },
    {
        initialRouteName: 'ForYou',
        activeColor: '#795548',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: "#ff9800" },
    },
);

export default createAppContainer(TabNavigator);