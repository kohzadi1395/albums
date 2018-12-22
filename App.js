/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {AlbumList, LoginView, Splash} from "./src";


type Props = {};
export default class App extends Component<Props> {
    state = {
        animationFinish: false,
        isLogin: false
    };

    Login() {
        this.setState({isLogin: true});
    }

    render() {
        if (!this.state.animationFinish) {
            return (
                <Splash OnFinish={() => {
                    this.setState({animationFinish: true});
                }
                }/>);
        }
        if (this.state.isLogin) {
            return (<AlbumList/>);
        }
        else
            return (<LoginView OnLogin={this.Login.bind(this)}/>
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
