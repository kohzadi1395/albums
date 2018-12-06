import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";


class AlbumDetail extends Component {

    render() {
        const {
            title,
            artist,
            thumbnail_image,
            image,
            url
        } = this.props.album;

        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
            mainContentStyle        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={mainContentStyle}>
                        <View style={thumbnailContainerStyle}>
                            <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                        </View>
                        <View style={headerContentStyle}>
                            <Text style={headerTextStyle}>{title}</Text>
                            <Text>{artist}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <Image source={{uri: image}}
                           style={imageStyle}/>
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
        width: null,
        height: 300
    }
};

export default AlbumDetail;
