import React, {Component} from 'react';
import {Image, SectionList, StyleSheet, Text, View} from 'react-native';
import axios from "axios";
import {Spinner} from "./Spinner";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import {ArtistDetail} from "./ArtistDetail";

class Artist extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        artists: [],
        selectedArtist: null
    };

    componentWillMount() {
        // axios.get('http://www.mocky.io/v2/5c248d9330000053007a6024')
        // axios.get('http://www.mocky.io/v2/5c2498f730000051007a6050')
        // axios.get('http://www.mocky.io/v2/5c2778f53000000e000bf727')
        axios.get('http://www.mocky.io/v2/5c31f35d3500001f04ca9fca')
            .then(response => {
                this.setState({artists: response.data});
            });
    }

    GetSectionListItem(item) {
        this.setState({selectedArtist: item});
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


        if (this.state.artists && !this.state.selectedArtist) {
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
                                                 colors={[
                                                     this.props.backgroundColor,
                                                     this.props.backgroundColor
                                                 ]}
                                                 // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                             >
                                                 <View
                                                     style={[AvatarStyle, {backgroundColor: this.props.backgroundColor}]}
                                                     rr>
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
        else if (this.state.selectedArtist) {
            return (<ArtistDetail selectedArtist={this.state.selectedArtist}/>);
        }
        else {
            return (<Spinner/>)
        }
    }
}

Artist.propTypes = {
    fontColor: PropTypes.any.isRequired,
    backgroundColor: PropTypes.any.isRequired,
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
