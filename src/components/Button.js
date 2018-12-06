import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import propTypes from "prop-types";


const Button = ({OnPress,children}) => {

    const {
        ButtonStyle,
        textStyle
    } = styles;

    return (
        <TouchableOpacity style={ButtonStyle} onPress={OnPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>);
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    ButtonStyle: {
        // flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
    }
};

export default Button;