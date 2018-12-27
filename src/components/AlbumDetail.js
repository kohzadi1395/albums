import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableWithoutFeedback} from 'react-native';
import {Card, CardSection, Button} from "../../src";


class AlbumDetail extends Component {


    state = {
        liked: false

    };

    toggleLike = () => this.setState(state => ({liked: !state.liked}));
    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.toggleLike();
        } else {
            this.lastTap = now;
        }
    }

    NumFormatter(num) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
    }


    render() {
        const {
            title,
            artist,
            thumbnail_image,
            image,
            url,
            liked
        } = this.props.album;

        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
            mainContentStyle,
            imageContainerStyle,
            heartIcon,
            likeContainer
        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={mainContentStyle}>
                        <View style={{flexDirection:'row'}}>
                            <View style={thumbnailContainerStyle}>
                                <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                            </View>
                            <View style={headerContentStyle}>
                                <Text style={headerTextStyle}>{title}</Text>
                                <Text>{artist}</Text>
                            </View>
                        </View>
                        <View style={likeContainer}>
                            <Image
                                source={this.state.liked ? require('../assets/heart.png') : require('../assets/heart-outline.png')}
                                style={heartIcon}
                                resizeMode="cover"
                            />
                            <Text>{this.NumFormatter(liked)}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={imageContainerStyle}>
                        <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                            <Image source={{uri: image}}
                                   style={imageStyle}/>
                        </TouchableWithoutFeedback>
                    </View>

                </CardSection>
                <CardSection>
                    <Button OnPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const styles = {
    mainContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        width: 300,
        height: 300
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    heartIcon: {
        width: 20,
        height: 20,
    },
    likeContainer: {
        marginRight:15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    }
};

export {AlbumDetail};
