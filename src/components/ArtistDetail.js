import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View,} from 'react-native';

import PropTypes from "prop-types";
import {Divider, TabView} from "../../src";

const FirstRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}/>
);
const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
);

class ArtistDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            thumbnailStyle,
            container,
            followContainerStyle,
            followCountStyle,
            followStyle
        } = styles;

        const {
            artist,
            thumbnail_image
        } = this.props.selectedArtist;

        return (
            <View style={container}>
                <ImageBackground source={{uri: thumbnail_image}}
                                 style={thumbnailStyle}
                                 resizeMode={'stretch'}>

                </ImageBackground>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    position: 'relative',
                }}>
                    <View style={{
                        width: 350,
                        height: 120,
                        backgroundColor: '#2d324f',
                        position: 'absolute',
                        marginTop: -80,
                        borderRadius: 10,
                        alignItems: 'center',
                        flexDirection: 'column',
                        zIndex: 2
                    }
                    }>
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 10,
                        }}>
                            {artist}
                        </Text>
                        <View style={{
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'row',
                            zIndex: 2,
                            marginTop: 10,
                            width: '100%'
                        }
                        }>
                            <View style={followContainerStyle}>
                                <Text style={followCountStyle}>1434</Text>
                                <Text style={followStyle}>Followers</Text>
                            </View>
                            <Divider/>
                            <View style={followContainerStyle}>
                                <Text style={followCountStyle}>1121</Text>
                                <Text style={followStyle}>Following</Text>
                            </View>
                            <Divider/>
                            <View style={followContainerStyle}>
                                <Text style={followCountStyle}>4507</Text>
                                <Text style={followStyle}>Likes</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TabView style={{}}
                                 tabs={[
                                     {
                                         title: 'News',
                                         body: <Text>News</Text>,
                                         selected: true
                                     },
                                     {
                                         title: 'Video',
                                         body: <Text>Video</Text>,
                                         selected: false

                                     },
                                     {
                                         title: 'Musics',
                                         body: <Text>Musics</Text>,
                                         selected: false
                                     },
                                     {
                                         title: 'Events',
                                         body: <Text>Events</Text>,
                                         selected: false
                                     },
                                 ]}
                        />
                    </View>
                </View>


            </View>
        );
    }
}

ArtistDetail.propTypes = {
    selectedArtist: PropTypes.any,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",

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
        alignItems: 'center',


    }, thumbnailStyle: {
        width: '100%',
        height: 420,

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
    followContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    followCountStyle: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    followStyle: {
        color: '#d2d2d2',
        fontSize: 15,
    },
    scene: {
        flex: 1,
    },
});
export {ArtistDetail};
