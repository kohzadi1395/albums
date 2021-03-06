import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {GalleryItem, Spinner} from "../../src";
import {ScrollView, View} from "react-native";


class Gallery extends Component {

    state = {
        pictures: [],
        selectedImage: null,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.get(this.props.url)
            .then(response => this.setState({pictures: response.data}));
    }

    GalleryItemPress(image) {

    }

    renderGallery() {
        return this.state.pictures.map(
            (image, index) => <GalleryItem key={index} Image={image}/>)
    }

    render() {
        if (!this.state.pictures) {
            return (<Spinner size='large'/>);
        }
        else {
            return (
                <View style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <ScrollView horizontal={true}>
                        {this.renderGallery()}
                    </ScrollView>
                </View>);
        }
    };
}

Gallery.propTypes = {
    url: PropTypes.string.isRequired
};
export {Gallery};