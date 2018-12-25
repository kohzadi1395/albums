import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export class SideBar extends Component {


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
                    <View>
                        <Image style={userImageStyle}
                               source={require("../assets/userTest.png")}/>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={headerNameUser}>Kohzadi Hossein</Text>
                        <Text style={headerNameUser}>Kohzadi_hossein@yahoo.com</Text>
                    </View>
                </View>

                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                   <Text style={styles.inputs}>Test</Text>
                </View>
                <View>
                    <Image style={inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <Text style={styles.inputs}></Text>
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
        color:'#ffffff',
        backgroundColor:'#ffffff',
        flex: 1,
    },
    userImageStyle: {
        backgroundColor: "#474747",
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#457b9d",
        padding: 7,
        width: 100,
        height: 100
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    SideBarStyle: {
        backgroundColor: '#ffffff'
    }
});