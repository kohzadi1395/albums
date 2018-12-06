import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import propTypes from "prop-types";

class AlbumDetail extends Component {

    static propTypes = {
        album: propTypes.string.isRequired
    };

    render() {
        const {
            title,
            artist,
            thumbnail_image,
            image
        } = this.props.album;
        const {
            thumbnailStyle,
            headerContentStyle
            , thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image source={{uri: image}} style={imageStyle}/>
                    <Text>{image}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
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
        marginLeft: 10
    },
    headerTextStyle: {
        fontSize: 15
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 300
    }
};
export default AlbumDetail;
