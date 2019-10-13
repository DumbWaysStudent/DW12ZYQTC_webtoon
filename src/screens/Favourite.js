import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

import Search from '../components/Search';
const favourites = [
    {
        title: 'The Secret of Angel',
        image: require('./../image/1.png'),
        countFav: 212,
    },
    {
        title: 'Young daddy',
        image: require('./../image/3.jpg'),
        countFav: 20,
    },
    {
        title: 'Pasutri kok bisa',
        image: require('./../image/2.png'),
        countFav: 189,
    },
    {
        title: 'Old Mom',
        image: require('./../image/4.jpg'),
        countFav: 120,
    },
    {
        title: 'Young Lady',
        image: require('./../image/5.png'),
        countFav: 5178,
    },
];

export class Favourite extends Component {

    Item = ({ favourites }) => {
        console.log(favourites);
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}>
                <View style={{ borderWidth: 1, borderColor: '#ccc' }}>
                    <Image source={favourites.image} style={{ width: 130, height: 130 }} />
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 15 }}>{favourites.title}</Text>
                    <Text style={{ color: '#aaa', fontSize: 12 }}>{favourites.countFav} Favourite</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Search />
                <FlatList
                    data={favourites}
                    renderItem={({ item }) => <this.Item favourites={item} />}
                    keyExtractor={item => item.title}
                />
            </View>
        );
    }
}

export default Favourite;