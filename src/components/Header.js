import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View, Alert} from 'react-native';
import PropTypes from "prop-types";
import {getUserTheme} from "../Utilities/UtilityStringFunc";


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
            <View style={[viewStyle, {backgroundColor: this.props.backgroundColor}]}>
                <TouchableHighlight onPress={this.props.OnMenu}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/HomeCmp/menu.png")}/>
                </TouchableHighlight>
                <Text style={[textStyle, {color: this.props.fontColor}]}>{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.OnSearch}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/HomeCmp/search.png")}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
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
    ShowMenu: PropTypes.bool,
    ShowSearch: PropTypes.bool,
    ShowBack: PropTypes.bool,
    fontColor: PropTypes.any,
    backgroundColor: PropTypes.any,
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    ShowMenu: true,
    ShowSearch: true,
    ShowBack: false
};
export {Header};