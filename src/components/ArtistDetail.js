import React, {Component} from 'react';
import {ImageBackground, ScrollView, Text, View,} from 'react-native';
import PropTypes from "prop-types";
import {Divider} from "../../src";
import {NumFormatter} from "../Utilities/UtilityStringFunc";
import axios from "axios";
import {NewsRow} from "./NewsRow";
import {Gallery} from "./Gallery";

class ArtistDetail extends Component {

    state = {
        selectedTab: '',
        news: [],
        images: [],
    };

    constructor(props) {
        super(props);
    }

    getPic() {
        return <Gallery url={'http://www.mocky.io/v2/5c457dca3200003615af173e'}/>;
    }

    getVideos() {
        axios.get('http://www.mocky.io/v2/5c43118f3800004f00072dba')
            .then(response => this.setState({news: response.data}))
            .catch(function (error) {
                console.log(error);
                Alert.alert('error', error);
            });
        return this.state.news.map((news, index) => <NewsRow key={index} news={news}> </NewsRow>)
    }

    getMusic() {
        axios.get('http://www.mocky.io/v2/5c43118f3800004f00072dba')
            .then(response => this.setState({news: response.data}))
            .catch(function (error) {
                console.log(error);
                Alert.alert('error', error);
            });
        return this.state.news.map((news, index) => <NewsRow key={index} news={news}> </NewsRow>)
    }


    renderBody() {


        switch (this.state.selectedTab) {
            case 'News':
                return this.getNews();
                break;
            case 'Pic':
                return this.getPic();
                break;
            case 'Videos':
                return this.getVideos();
                break;
            case 'Music':
                return this.getMusic();
                break;
            default:
            // code block
        }

    }

    getNews() {
        axios.get('http://www.mocky.io/v2/5c43118f3800004f00072dba')
            .then(response => this.setState({news: response.data}))
            .catch(function (error) {
                console.log(error);
                Alert.alert('error', error);
            });
        return this.state.news.map((news, index) => <NewsRow key={index} news={news}> </NewsRow>)
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
            thumbnail_image,
            follower,
            following,
            liked,

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
                                <Text style={followCountStyle}>{NumFormatter(follower)}</Text>
                                <Text style={followStyle}>Followers</Text>
                            </View>
                            <Divider/>
                            <View style={followContainerStyle}>
                                <Text style={followCountStyle}>{NumFormatter(following)}</Text>
                                <Text style={followStyle}>Following</Text>
                            </View>
                            <Divider/>
                            <View style={followContainerStyle}>
                                <Text style={followCountStyle}>{NumFormatter(liked)}</Text>
                                <Text style={followStyle}>Likes</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.tabContainer}>
                            <View>
                                <Text
                                    style={[styles.textMenuStyle, this.state.selectedTab === 'Pic' ? {color: '#737373'} : {color: '#d3d3d3'}]}
                                    onPress={() => {
                                        this.setState({selectedTab: 'Pic'});
                                    }}
                                >
                                    Picture
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[styles.textMenuStyle, this.state.selectedTab === 'Music' ? {color: '#737373'} : {color: '#d3d3d3'}]}
                                    onPress={() => {
                                        this.setState({selectedTab: 'Music'});
                                    }}
                                >
                                    Music
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[styles.textMenuStyle, this.state.selectedTab === 'Videos' ? {color: '#737373'} : {color: '#d3d3d3'}]}
                                    onPress={() => {
                                        this.setState({selectedTab: 'Videos'});
                                    }}
                                >
                                    Videos
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[styles.textMenuStyle, this.state.selectedTab === 'News' ? {color: '#737373'} : {color: '#d3d3d3'}]}
                                    onPress={() => {
                                        this.setState({selectedTab: 'News'});
                                    }}
                                >
                                    News
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 160}}>
                            <ScrollView>
                                {this.renderBody()}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

ArtistDetail.propTypes = {
    selectedArtist: PropTypes.any,
};


const styles = {
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
    tabContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textMenuStyle: {
        fontSize: 20,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15
    },
};
export {ArtistDetail};
