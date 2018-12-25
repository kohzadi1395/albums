import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from "prop-types";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            textStyle,
            viewStyle
        } = styles;

        return (
            <View style={viewStyle}>
                <TouchableHighlight onPress={this.props.OnMenu}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/menu.png")}/>
                </TouchableHighlight>
                <Text style={textStyle}>Albums</Text>
                <TouchableHighlight onPress={this.props.OnSearch}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/search.png")}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: "#1e3557",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        flexDirection: 'row'

    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
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
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginRight: 15
    },
};
Header.propTypes = {
    OnSearch: PropTypes.func,
    OnMenu: PropTypes.func,
    ShowMenu:PropTypes.boolean,
    ShowSearch:PropTypes.boolean,
    ShowBack:PropTypes.boolean
};

Header.defaultProps  = {
    ShowMenu:true,
    ShowSearch:true,
    ShowBack:false
};
export {Header};