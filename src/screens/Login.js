import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Text,
    View,
    Icon,
    Item,
    Input,
    Label,
    Button,
} from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPassword: true,
            isValidLogin: false,
            isValidEmail: true,
            emailValue: '',
            passwordValue: '',
            userEmail: 'rahman@gmail.com',
            userPassword: '123',
        };
    }

    onValidateEmail = text => {
        this.setState({ emailValue: text });
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ isValidEmail: false });
        } else {
            this.setState({ isValidEmail: true });
            if ((this.state.userEmail == text) && (this.state.passwordValue == this.state.userPassword)) {
                this.setState({ isValidLogin: true });
            } else {
                this.setState({ isValidLogin: false });
            }
        }
    };

    onValidatePassword = text => {
        this.setState({ passwordValue: text });
        if ((this.state.emailValue == this.state.userEmail) && (this.state.userPassword == text)) {
            this.setState({ isValidLogin: true });
        } else {
            this.setState({ isValidLogin: false });
        }
    };

    onShowPassword = () => {
        if (this.state.passwordValue != '') {
            !this.state.isShowPassword ? this.setState({ isShowPassword: true }) : this.setState({ isShowPassword: false });
            if ((this.state.emailValue == this.state.userEmail) && (this.state.passwordValue == this.state.userPassword)) {
                this.setState({ isValidLogin: true });
            } else {
                this.setState({ isValidLogin: false });
            }
        }
    };


    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.viewContent}>
                    <Text style={styles.textTitle}>LOG IN</Text>
                    <Text style={styles.textSubTitle}>
                        Login with your account WEBTOON
                    </Text>
                    <Item floatingLabel style={[styles.itemInputEmail, !this.state.isValidEmail ? styles.textInputError : null]}>
                        <Label>
                            Email
                        </Label>
                        <Input
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={text => this.onValidateEmail(text)}
                            value={this.state.emailValue}
                        />
                    </Item>
                    <Item floatingLabel style={styles.itemInputPass}>
                        <Label>Password</Label>
                        <Input
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={!this.state.isShowPassword ? true : false}
                            onChangeText={text => this.onValidatePassword(text)}
                            value={this.state.passwordValue}
                        />
                        <Icon
                            active name={!this.state.isShowPassword ? "eye" : "eye-off"}
                            onPress={() => {
                                this.onShowPassword();
                            }}
                        />
                    </Item>
                    <Button full
                        style={styles.buttonLogin}
                        disabled={!this.state.isValidLogin}
                        onPress={() => this.props.navigation.navigate('ForYou')}
                    >
                        <Text style={styles.textButton}>Log In</Text>
                    </Button>

                </View>
            </Container>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    viewContent: {
        flex: 1,
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 40,
        textAlign: 'center',
        bottom: 20
    },
    textSubTitle: {
        fontSize: 15,
        marginBottom: '10%',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 20,
        borderWidth: 1,
    },
    textButton: {
        color: '#000',
    },
    itemInputPass: {
        marginBottom: '3%',
        width: '80%',
    },
    itemInputEmail: {
        marginBottom: '8%',
        width: '80%',
    },
    textInputError: {
        borderColor: 'red',
    },
    buttonLogin: {
        backgroundColor: '#ff9800'
    }
});