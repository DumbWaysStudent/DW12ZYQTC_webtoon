import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Text,
    View,
} from 'native-base';

class Profile extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.viewContent}>
                    <Text style={styles.textTitle}>Comic Paper</Text>
                    <Text style={styles.textSubTitle}>
                        welcome happy reading
                    </Text>
                </View>
            </Container>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        alignItems: 'center',
    },
    viewContent: {
        flex: 1,
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 40,
        textAlign: 'center',
    },
    textSubTitle: {
        fontSize: 15,
        marginBottom: '10%',
        textAlign: 'center',
    },
});