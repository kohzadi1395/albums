import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Card} from "../../src";

class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            Title,
            ThumbnailImage
        } = this.props.news;

        return (
            <Card>
                <View style={styles.newsRowContainer}>
                    <View style={{
                        minWidth: 60,
                        width: '20%',
                        marginLeft: 5
                    }}>
                        <Image source={{uri: ThumbnailImage}}
                               style={styles.thumbnailStyle}/>
                    </View>
                    <View style={{
                        minWidth: 60,
                        width: '80%',
                        marginLeft: 5
                    }}>
                        <Text numberOfLines={2} style={styles.titleStyle}>{Title}</Text>
                    </View>
                </View>
            </Card>
        );
    }
}


const styles = {
    thumbnailStyle: {
        width: 60,
        height: 60,
        borderRadius: 10,

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    newsRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 80,
    }
};

export {NewsItem};