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
                    <View>
                        <Image source={{uri: ThumbnailImage}}
                               style={styles.thumbnailStyle}/>
                    </View>
                    <View>
                        <Text style={styles.titleStyle}>{Title.substring(0, 40) + ' ... '}</Text>
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
        overflow: 'hidden',
        marginRight: 5,
        marginLeft: 5,

    },
    newsRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 80,
        margin: 5,

    }
};

export {NewsItem};