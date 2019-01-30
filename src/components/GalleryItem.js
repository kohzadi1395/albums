import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {Image, View} from 'react-native';


class GalleryItem extends Component {

    state = {
        image: null
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {
            Url,
            Thumbnail,
            Id,
            Title,
            Description
        } = this.props.Image;
        axios.get(Url)
            .then(response => {
                this.setState({image: response.data});
            });
    }

    render() {
        const {
            Url,
            Thumbnail,
            Id,
            Title,
            Description
        } = this.props.Image;
        if (Url) {
            return (<Image
                source={{uri: Url}}
                style={{
                    width: 200,
                    height: 200,
                }}/>);
        } else
            return <View/>;
    };
}

GalleryItem.propTypes = {
    Image: PropTypes.object.isRequired
};
export {GalleryItem};