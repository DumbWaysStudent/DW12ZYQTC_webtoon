import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {
    Container,
    Text,
    View,
    Content,
    Item,
} from 'native-base';

class DetailWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            banners: [
                {
                    title: 'Ep.4 - End Game ',
                    url: require('./../image/1.png'),
                    releaseDate: '9 Oktober 2019',
                },
                {
                    title: 'Ep.3 - My family are angel',
                    url: require('./../image/1.png'),
                    releaseDate: '3 Oktober 2019',

                },
                {
                    title: 'Ep.2 - my nephew is funny (2)',
                    url: require('./../image/1.png'),
                    releaseDate: '23 September 2019',
                },
                {
                    title: 'Ep.1 - my nephew is funny (1)',
                    url: require('./../image/1.png'),
                    releaseDate: '17 September 2019',
                },
                {
                    title: 'Prolog',
                    url: require('./../image/1.png'),
                    releaseDate: '1 September 2019',
                },
            ],
        };
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                        <View style={styles.viewColor}>
                            <Item style={styles.itemMarginBottom}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: 200,
                                    }}
                                    source={this.state.banners[0].url}
                                />
                            </Item>
                        </View>

                        <SafeAreaView>
                            <View style={styles.viewContent}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.banners}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', { item })}>
                                            < View style={styles.viewAddFav} >
                                                <Image
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        borderWidth: 3,
                                                        borderColor: 'grey',
                                                    }}
                                                    source={item.url}
                                                />
                                                <View style={styles.viewListItem}>
                                                    <Text>{item.title}</Text>
                                                    <Text style={{ fontSize: 13, fontColor: 'grey' }}>{item.releaseDate}</Text>
                                                </View>
                                            </View></TouchableOpacity>
                                    )}
                                    keyExtractor={item => item}
                                />
                            </View>
                        </SafeAreaView>
                    </View>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f6',
        alignItems: 'center',
    },
    viewContent: {
        marginStart: 18,
        width: '90%',
        alignItems: 'center',
        marginTop: 10
    },
    viewColor: {
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    inputText: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 15,
    },
    itemSliderImage: {
        width: '90%',
        borderWidth: 3,
        borderColor: 'grey',
    },
    itemMarginBottom: {
        marginBottom: 10,
    },
    itemMarginBottomInput: {
        marginBottom: 20,
    },
    favoriteTitle: {
        textAlign: 'center',
    },
    textSubTitle: {
        fontSize: 18,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    favItem: {
        marginStart: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
    },
    viewAddFav: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 15,
    },
    viewListItem: {
        width: "100%",
        marginStart: 10,
        justifyContent: 'center',
    },
    btnFavorite: {
        height: 20,
        width: 120,
    },
});

export default DetailWebtoon;