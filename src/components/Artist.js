import React, {Component} from 'react';
import {Text, SectionList, View, Alert, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import axios from "axios";
import {Spinner} from "./Spinner";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import {Header} from "./Header";

class Artist extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        artists: []
    };

    componentWillMount() {
        // axios.get('http://www.mocky.io/v2/5c248d9330000053007a6024')
        // axios.get('http://www.mocky.io/v2/5c2498f730000051007a6050')
        axios.get('http://www.mocky.io/v2/5c2778f53000000e000bf727')
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
        Alert.alert(item.artist);
    }

    render() {

        const {
            thumbnailStyle,
            container,
            AvatarStyle,
            SectionListItemS,
            SectionListItemContainer,
            markerStyle
        } = styles;

        if (!this.state.artists)
            return (<Spinner/>)
        else
            return (
                <View style={container}>
                    <SectionList style={{
                        marginLeft: 5,
                        marginRight: 5,
                    }}
                                 sections={this.state.artists}
                                 renderSectionHeader={
                                     ({section}) =>
                                         <View>
                                             <LinearGradient
                                                 //     style={{
                                                 //     borderTopRightRadius: 25,
                                                 //     borderTopLeftRadius: 25,
                                                 //     borderWidth: 1,
                                                 // }}
                                                 colors={[
                                                     this.props.backgroundColor,
                                                     this.props.backgroundColor
                                                 ]}
                                                 // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                             >
                                                 <View style={[AvatarStyle,{backgroundColor:this.props.backgroundColor}]}rr>
                                                     <Text style={
                                                         [{
                                                             fontSize: 20,
                                                             fontWeight: 'bold'
                                                         },
                                                             {
                                                                 color: this.props.fontColor
                                                             }]}>
                                                         {section.FirstCharFirstName}
                                                     </Text>
                                                 </View>
                                             </LinearGradient>
                                         </View>
                                 }
                                 renderItem={({item}) =>
                                     <View style={SectionListItemContainer}>
                                         <Image source={{uri: item.thumbnail_image}} style={thumbnailStyle}/>
                                         <Text style={SectionListItemS}
                                               onPress={this.GetSectionListItem.bind(this, item)}> {item.artist} </Text>
                                         <Image source={require("../assets/marker.png")} style={markerStyle}/>

                                     </View>
                                 }

                                 keyExtractor={(item, index) => index}
                    />
                </View>
            );
    }
}

Artist.propTypes = {
    fontColor: PropTypes.any,
    backgroundColor: PropTypes.any,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    SectionHeader: {
        fontSize: 20,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    SectionListItemS: {
        flex: 1,
        fontSize: 16,
        padding: 6,
        color: '#000',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    AvatarStyle: {
        width: 50,
        height: 50,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 15,


    },
    AvatarTextStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'

    }, thumbnailStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
    markerStyle: {
        width: 30,
        height: 30,
        margin: 5,
    },

    SectionListItemContainer: {
        //flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        backgroundColor: '#F5F5F5',
        borderColor: '#ddd'
    },
});
export {Artist};
