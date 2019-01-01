import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PropTypes from "prop-types";

export class Setting extends Component {

    render() {

        return (
            <View>
                <View>
                    <Text>Email:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text>Validation</Text>
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text>Validation</Text>
                </View>
                <View>
                    <Text>Confirm Password:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text>Validation</Text>
                </View>
                <View>
                    <Text>Theme Color:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text>Validation</Text>
                </View>
            </View>

        );
    }

}
