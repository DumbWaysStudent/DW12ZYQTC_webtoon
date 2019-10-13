import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import {
    Container,
    Text,
    View,
    Content,
} from 'native-base';

class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            banners: [
                {
                    image: require('./../image/end_game/1a.jpg'),
                },
                {
                    image: require('./../image/end_game/1b.jpg'),
                },
                {
                    image: require('./../image/end_game/1c.jpg'),
                },
            ],
        };
    }
    render() {
        console.disableYellowBox = true;
        return (
            <Container style={styles.container}>
                <Content>
                    <SafeAreaView>
                        <View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.banners}
                                renderItem={({ item }) => (
                                    <View style={styles.viewImageDetail}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: 500,
                                            }}
                                            source={item.image}
                                        />
                                    </View>
                                )}
                                keyExtractor={item => item}
                            />
                        </View>
                    </SafeAreaView>
                </Content>
            </Container>
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
    viewImageDetail: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
});

export default DetailEpisode;