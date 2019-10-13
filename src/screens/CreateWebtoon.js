import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const dataInsertEpisode = [
    {
        episode: '4',
        image: require('./../image/1.png'),
        published: '1 Januari 2019',
    },
    {
        episode: '6',
        image: require('./../image/3.jpg'),
        published: '2 September 2019',
    },
    {
        episode: '7',
        image: require('./../image/2.png'),
        published: '4 September 2019',
    },
    {
        episode: '9',
        image: require('./../image/4.jpg'),
        published: '6 Oktober 2019',
    },
    {
        episode: '2',
        image: require('./../image/5.png'),
        published: '8 oktober 2019',
    },
];

export class CreateWebtoon extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Icon
                    name="check"
                    size={25}
                    color="#009b00"
                    style={{ marginRight: 20 }}
                    onPress={() => console.log('add webtoon')}
                />
            ),
        };
    };

    state = {
        data: dataInsertEpisode,
    };

    _renderImage = ({ webtoon }) => {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ borderWidth: 1, borderColor: '#ccc' }}>
                    <Image
                        source={webtoon.image}
                        style={{ width: 80, height: 80 }}
                        resizeMode="stretch"
                    />
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 15 }}>
                        Ep. {webtoon.episode}
                    </Text>
                    <Text style={{ color: '#aaa', fontSize: 12 }}>
                        {webtoon.episode} Episode(s)
          </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17 }}>Title</Text>
                    <TextInput style={styles.titleInput} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 17, marginVertical: 5 }}>Episode</Text>
                    <FlatList
                        data={this.state.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <this._renderImage webtoon={item} />}
                        keyExtractor={item => item.episode}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ff9800',
                        padding: 10,
                        marginVertical: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('CreateEpisode')}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'white' }}>
                        + Add Episode
          </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleInput: {
        paddingHorizontal: 10,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#ccc',
    },
});

export default CreateWebtoon;