import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";


class Artist extends Component {

    render() {
        const {
            title,
            artist,
            thumbnail_image,
            image,
            url
        } = this.props.album;

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

        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
            mainContentStyle,
            imageContainerStyle
        } = styles;

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
                    <View style={imageContainerStyle}>
                        <Image source={{uri: image}}
                               style={imageStyle}/>
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
    }
};

export default Artist;
