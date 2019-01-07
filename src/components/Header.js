import React, {Component} from 'react';
import {Alert, Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from "prop-types";


class Header extends Component {

    state = {
        showSearchBar: false,
        searchString: '',
    };

    searchSubmit(e) {
        Alert.alert('searchSubmit', this.state.searchString);
    }

    constructor(props) {
        super(props);
    }

    showSearch() {
        if (this.props.ShowSearch)
            return (
                <TouchableHighlight onPress={() => this.setState({showSearchBar: !this.state.showSearchBar})}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/HomeCmp/search.png")}/>
                </TouchableHighlight>
            );
    }

    showSearchBar() {
        if (this.state.showSearchBar)
            return (
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={(searchString) => {
                            this.setState({searchString})
                        }}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={this.searchSubmit.bind(this)}
                    />
                </View>);
    }

    showMenu() {
        if (this.props.ShowMenu)
            return (
                <TouchableHighlight onPress={this.props.OnMenu}>
                    <Image style={styles.inputIcon}
                           source={require("../assets/HomeCmp/menu.png")}/>
                </TouchableHighlight>
            );
    }

    render() {
        const {
            textStyle,
            viewStyle
        } = styles;

        return (
            <View style={[{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
            },
                {
                    height: this.state.showSearchBar ? 100 : 50
                }]}>
                <View style={[viewStyle, {backgroundColor: this.props.backgroundColor}]}>
                    {this.showMenu()}
                    <Text style={[textStyle, {color: this.props.fontColor}]}>{this.props.title}</Text>
                    {this.showSearch()}
                </View>
                {this.showSearchBar()}

            </View>
        );
    }
}

const styles = {
    viewStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        // paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        flexDirection: 'row',
        width: '100%'
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
    searchSection: {
        height: 150,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
};
Header.propTypes = {
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