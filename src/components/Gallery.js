import ImageBrowser from 'react-native-interactive-image-gallery'

import React, {Component} from "react";
import axios from "axios";
import {Spinner} from "./Spinner";
import PropTypes from "prop-types";


class Gallery extends Component {

    state = {
        pictures: [],
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.get(this.props.url)
            .then(response => this.setState({pictures: response.data}));
    }

    renderGallery() {
        const imageURLs: Array<Object> = this.state.pictures.map(
            (img: Object, index: number) => ({
                URI: img.Url,
                thumbnail: img.Thumbnail,
                id: String(index),
                title: img.Title,
                description: img.Description
            })
        );
        return <ImageBrowser images={imageURLs}/>
    }

    render() {
        if (!this.state.pictures) {
            return (<Spinner size='large'/>);
        }
        else {
            return (this.renderGallery());
        }
    };
}

Gallery.propTypes = {
    url: PropTypes.string.isRequired
};
export {Gallery};