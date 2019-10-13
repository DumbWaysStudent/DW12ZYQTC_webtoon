import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Input } from 'native-base';


const Search = props => {
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <Input placeholder="Search" style={{ fontSize: 15, width: '90%' }} />
                <Icon ios="ios-search" android="md-search" style={styles.searchIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    searchWrapper: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#795548',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    searchIcon: {
        fontSize: 28,
        color: '#ff9800',
    },
});

export default Search;