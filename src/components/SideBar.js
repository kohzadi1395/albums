import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class SideBar extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Button title="Hi" onPress={this.props.onClose}>
                <Text>Hello</Text>
                </Button>
            </View>
        );
    }
}