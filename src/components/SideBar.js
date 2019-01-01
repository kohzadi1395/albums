import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PropTypes from "prop-types";


export class SideBar extends Component {

    state = {avatar: require("../assets/SlideBarCmp/userTest.png")};


    btnChangeImage() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatar: source,
                });
            }
        });
    }

    render() {
        const {
            userImageStyle,
            headerContainer,
            inputIcon,
            headerNameUser,
            menuItemTextStyle,
            menuItemStyle
        } = styles;

``
        return (
            <View style={{flex: 1, backgroundColor: "#1e3557"}}>
                <View style={headerContainer}>
                    <Image style={userImageStyle}
                           source={this.state.avatar}/>
                    <TouchableOpacity onPress={this.btnChangeImage.bind(this)}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/camera.png")}/>
                    </TouchableOpacity>

                    <Text style={headerNameUser}>Kohzadi Hossein</Text>
                    <Text style={headerNameUser}>Kohzadi_hossein@yahoo.com</Text>
                </View>
                <TouchableOpacity onPress={this.props.onMenuSelect.bind(this,'artist')}>
                    <View style={menuItemStyle}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/group.png")}/>
                        <Text style={menuItemTextStyle}>Artist</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onMenuSelect.bind(this,'albums')}>
                    <View style={menuItemStyle}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/note.png")}/>
                        <Text style={menuItemTextStyle}>All Albums</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onMenuSelect.bind(this,'favorite')}>
                    <View style={menuItemStyle}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/favorite.png")}/>
                        <Text style={menuItemTextStyle}>Favorite</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onMenuSelect.bind(this,'setting')}>
                    <View style={menuItemStyle}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/settings.png")}/>
                        <Text style={menuItemTextStyle}>Setting</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onMenuSelect.bind(this,'logout')}>
                    <View style={menuItemStyle}>
                        <Image style={inputIcon}
                               source={require("../assets/SlideBarCmp/logout.png")}/>
                        <Text style={menuItemTextStyle}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

SideBar.propTypes = {
    onMenuSelect: PropTypes.func
};


const styles = StyleSheet.create({
    headerNameUser: {
        color: '#fff',
        fontWeight: 'bold'
    },
    headerContainer: {
        backgroundColor: "#1e3557",
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    menuItemStyle: {
        height: 45,
        marginLeft: 16,
        alignItems: 'center',
        flexDirection: 'row',

    },
    menuItemTextStyle: {
        borderBottomColor: '#FFFFFF',
        color: '#ffffff',
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 16,
        fontSize: 16
    },
    userImageStyle: {
        backgroundColor: "#474747",
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#457b9d",
        width: 100,
        height: 100,

    },
    inputIcon: {
        width: 30,
        height: 30,

    },
    SideBarStyle: {
        backgroundColor: '#ffffff'
    }
});