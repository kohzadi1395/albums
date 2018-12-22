//https://medium.com/react-native-training/progressive-image-loading-in-react-native-e7a01827feb7
// ProgressiveImage.js

import React from 'react';
import { View, StyleSheet ,Animated} from 'react-native';

class ProgressiveImage extends React.Component {

    thumbnailAnimated = new Animated.Value(0);

    imageAnimated = new Animated.Value(0);

    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
        }).start();
    };

    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
        }).start();
    };
    render() {
        const {
            thumbnailSource,
            source,
            style,
        } = this.props;

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={thumbnailSource}
                    style={[style, { opacity: this.thumbnailAnimated }]}
                    onLoad={this.handleThumbnailLoad}
                    blurRadius={1}
                />
                <Animated.Image
                    source={source}
                    style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
                    onLoad={this.onImageLoad}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    container: {
        backgroundColor: '#e1e4e8',
    },
});

export default ProgressiveImage;