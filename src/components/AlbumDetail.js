import React, {Component} from 'react';
import {Text, View, Image, Linking, Animated, TouchableOpacity} from 'react-native';
import {Card, CardSection, Button, DoubleTap} from "../../src";
import { NumFormatter } from '../Utilities/UtilityStringFunc'
import PropTypes from 'prop-types';


class AlbumDetail extends Component {


    state = {
        liked: false

    };
    animatedValue = new Animated.Value(0);

    toggleLike = () => {
        this.setState((state) => {
            const newLiked = !state.liked;

            if (newLiked) {
                Animated.sequence([
                    Animated.spring(this.animatedValue, {toValue: 1}),
                    Animated.spring(this.animatedValue, {toValue: 0}),
                ]).start();
            }

            return {liked: newLiked};
        });
    };

    renderOverlay = () => {
        const imageStyles = [
            styles.overlayHeart,
            {
                opacity: this.animatedValue,
                transform: [
                    {
                        scale: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.7, 1.5],
                        }),
                    },
                ],
            },
        ];

        return (
            <View style={styles.overlay}>
                <Animated.Image
                    source={require('../assets/heart.png')}
                    style={imageStyles}
                />
            </View>
        );
    };

    lastTap = null;

    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.toggleLike();
        } else {
            this.lastTap = now;
        }
    };





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
                        <View style={{flexDirection: 'row'}}>
                            <View style={thumbnailContainerStyle}>
                                <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                            </View>
                            <View style={headerContentStyle}>
                                <Text style={headerTextStyle}>{title}</Text>
                                <Text>{artist}</Text>
                            </View>
                        </View>
                        <View style={likeContainer}>
                            <TouchableOpacity onPress={this.toggleLike}>
                                <Image
                                    source={this.state.liked ? require('../assets/heart.png') : require('../assets/heart-outline.png')}
                                    style={heartIcon}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <Text>{NumFormatter(liked)}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={imageContainerStyle}>
                        <DoubleTap onDoubleTap={this.toggleLike}>
                            <View>
                                <Image source={{uri: image}}
                                       style={imageStyle}/>
                                {this.renderOverlay()}
                            </View>
                        </DoubleTap>
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
        marginRight: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    overlayHeart: {
        tintColor: '#fff',
    },
};

export {AlbumDetail};
