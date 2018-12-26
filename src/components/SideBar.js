import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

//require("../assets/userTest.png")

export class SideBar extends Component {

    state = {avatar: require("../assets/userTest.png")};


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
            headerNameUser
        } = styles;


        return (
            <View style={{flex: 1, backgroundColor: "#1e3557"}}>
                <View style={headerContainer}>
                    <Image style={userImageStyle}
                           source={this.state.avatar}/>
                    <TouchableHighlight onPress={this.btnChangeImage.bind(this)}>
                        <Image style={inputIcon}
                               source={require("../assets/camera.png")}/>
                    </TouchableHighlight>

                    <Text style={headerNameUser}>Kohzadi Hossein</Text>
                    <Text style={headerNameUser}>Kohzadi_hossein@yahoo.com</Text>
                </View>

                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}>Test</Text>
                </View>
                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}>1111</Text>
                </View>
                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}>Test</Text>
                </View>
                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}>Test</Text>
                </View>
                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}>Test</Text>
                </View>
            </View>
        );
    }
}

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
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        color: '#ffffff',
        backgroundColor: '#ffffff',
        flex: 1,
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
        justifyContent: 'center',
        alignSelf: 'center'
    },
    SideBarStyle: {
        backgroundColor: '#ffffff'
    }
});