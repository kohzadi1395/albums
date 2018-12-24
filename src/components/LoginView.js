import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import PropTypes from "prop-types";
import axios from "axios";

export class LoginView extends Component {

    state = {
        email: '',
        password: '',
        user: []
    };

    constructor(props) {
        super(props);

    }

    onClickListener() {
        Alert.alert("Alert", "Button pressed ");
    }

    btnLoginPress() {
        axios.get('http://www.mocky.io/v2/5c1f46703000001200602a73', {
            params: {
                email: this.setState.email,
                password: this.setState.password
            }
        })
            .then(response => {
                this.setState({user: response.data});
                if (this.state.user && this.state.user.length > 0) {
                    {
                        this.props.OnLogin(this.state.user);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
                Alert.alert('error', error);
            });


    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/message.png")}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/key.png")}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={this.btnLoginPress.bind(this)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={this.props.OnForgotPassword}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={this.props.OnRegister}>
                    <Text>Register</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

LoginView.defaultProps = {
    OnForgotPassword: function () {
        this.onClickListener('Forgot_Password');
    },
    OnRegister: function () {
        this.onClickListener('Register');
    }
};

LoginView.propTypes = {
    OnLogin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});