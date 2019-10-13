import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myCreationWebtoon = [
    {
        title: 'The Secret of Angel',
        image: require('./../image/1.png'),
        totalEpisode: 212,
    },
    {
        title: 'Young daddy',
        image: require('./../image/3.jpg'),
        totalEpisode: 120,
    },
    {
        title: 'Pasutri kok bisa',
        image: require('./../image/2.png'),
        totalEpisode: 189,
    },
    {
        title: 'Old Mom',
        image: require('./../image/4.jpg'),
        totalEpisode: 120,
    },
    {
        title: 'Young Lady',
        image: require('./../image/5.png'),
        totalEpisode: 138,
    },
]

export class MyCreationWebtoon extends Component {
    Item = ({ myCreationWebtoon }) => {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}>
                <View style={{ borderWidth: 1, borderColor: '#ccc' }}>
                    <Image
                        source={myCreationWebtoon.image}
                        style={{ width: 130, height: 130 }}
                        resizeMode='stretch'
                    />
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 15 }}>
                        {myCreationWebtoon.title}
                    </Text>
                    <Text style={{ color: '#aaa', fontSize: 12 }}>
                        {myCreationWebtoon.totalEpisode} Episode(s)</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={myCreationWebtoon}
                    renderItem={({ item }) => <this.Item myCreationWebtoon={item} />}
                    keyExtractor={item => item.title}
                />
                <View
                    style={{
                        alignItems: 'center',
                        width: 60,
                        position: 'absolute',
                        bottom: 5,
                        right: 5,
                    }}>
                    <Icon name="plus-circle" size={60} color="#ff9800" />
                </View>
            </View>
        );
    }
}

export default MyCreationWebtoon;