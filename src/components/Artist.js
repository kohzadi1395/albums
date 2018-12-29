import React, {Component} from 'react';
import {Text, SectionList, View, Alert, StyleSheet} from 'react-native';
import axios from "axios";
import {Spinner} from "./Spinner";
import LinearGradient from "react-native-linear-gradient";

class Artist extends Component {

    state = {
        artists: []
    };

    componentWillMount() {
        // axios.get('http://www.mocky.io/v2/5c248d9330000053007a6024')
        axios.get('http://www.mocky.io/v2/5c2498f730000051007a6050')
            .then(response => {
                this.setState({artists: response.data});
            });
    }

    /*
        render() {
            const abc = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const color = {
                0: '#794044',
                1: '#ff7373',
                2: '#d3ffce',
                3: '#daa520',
                4: '#ffa500',
                5: '#0000ff',
                6: '#3b5998',
                7: '#b0e0e6',
                8: '#ff7f50',
                9: '#ffe4e1',
                A: '#065535',
                B: '#133337',
                C: '#000000',
                D: '#ffc0cb',
                F: '#ff7f50',
                E: '#ffe4e1',
                G: '#008080',
                H: '#ff0000',
                K: '#ffd700',
                L: '#666666',
                M: '#00ffff',
                N: '#794044',
                O: '#ff7373',
                P: '#d3ffce',
                Q: '#daa520',
                R: '#ffa500',
                S: '#0000ff',
                T: '#3b5998',
                U: '#b0e0e6',
                W: '#065535',
                V: '#7fffd4',
                Y: '#fa8072',
                Z: '#191970',
                X: '#000080'
            };


            return (

                <View>
                    <SectionList
                        // renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                        // renderSectionHeader={({section: {title}}) => (
                        //     <Text style={{fontWeight: 'bold'}}>{title}</Text>
                        // )}
                        sections={this.state.artists}
                        renderSectionHeader={ ({section}) => <Text > { section.artist } </Text> }
                        renderItem={ ({item}) => <Text  onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
                        keyExtractor={ (item, index) => index }
                    />
                </View>
            );
        }
    */

    GetSectionListItem(item) {
        Alert.alert(item)
    }

    render() {
        if (!this.state.artists)
            return (<Spinner/>)
        else
            return (
                <View style={styles.container}>
                    <SectionList
                        sections={this.state.artists}
                        renderSectionHeader={({section}) =>
                            <LinearGradient
                                colors={[
                                    "#1e3557",
                                    "#ffffff",
                                ]}
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            >


                                <View style={styles.AvatarStyle}>
                                    <Text>
                                        {section.FirstCharFirstName}
                                    </Text>
                                </View>
                            </LinearGradient>
                        }
                        renderItem={({item}) =>
                            <Text style={styles.SectionListItemS}
                                  onPress={this.GetSectionListItem.bind(this, item)}> {item.artist} </Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    },
    SectionHeader: {
        backgroundColor: '#f67e23',
        fontSize: 20,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    SectionListItemS: {
        fontSize: 16,
        padding: 6,
        color: '#000',
        backgroundColor: '#F5F5F5'
    },
    AvatarStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    AvatarTextStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25

    }
});
export {Artist};
