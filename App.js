/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
import Artist from "./src/components/Artist";
import Splash from "./src/components/Splash";


type Props = {};
export default class App extends Component<Props> {
    state = {animationFinish: false};

    render() {
        if (this.state.animationFinish) {
            return (<AlbumList/>);
        }
        else {
            return (
                <Splash OnFinish={() => {
                    this.setState({animationFinish: true});
                }
                }/>);
        }

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
