/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {LoginView, Splash, HomeScreen, SideBar, Artist, ArtistList} from "./src";


type Props = {};

export default class App extends Component<Props> {


    state = {
        animationFinish: false,
        isLogin: false,
        user: []
    };

    Login(user) {
        this.setState({
            isLogin: true,
            user: user
        });
    }

    render() {
        // if (!this.state.animationFinish) {
        //     return (
        //         <Splash OnFinish={() => {
        //             this.setState({animationFinish: true});
        //         }
        //         }/>);
        // }
        // if (this.state.isLogin) {
        //     return (<HomeScreen/>);
        // }
        // else
        //     return (<LoginView OnLogin={this.Login.bind(this)}/>
        //     );

        return (<HomeScreen/>);
        // return (<ArtistList/>);
        // return (<Artist/>);
        //  return (<MapViewer/>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
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
