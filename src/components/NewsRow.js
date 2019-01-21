import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';


class NewsRow extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        const {
            image,
            Title,
            ThumbnailImage

        } = this.props.news;

        return (
            <View style={styles.newsRowContainer}>
                <View>
                    <Image source={{uri: ThumbnailImage}}
                           style={styles.thumbnailStyle}/>
                </View>
                <View>
                    <Text style={styles.titleStyle}>{Title}</Text>
                </View>
            </View>
        );
    }
}


const styles = {
    thumbnailStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    newsRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        paddingLeft: 15,
        paddingRight: 15,
    }
};

export {NewsRow};