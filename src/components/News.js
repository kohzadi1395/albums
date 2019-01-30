import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {NewsItem, Spinner} from "../../src";
import {Dimensions, ScrollView, View} from "react-native";

class News extends Component {

    state = {
        news: [],
        selectedNews: null,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.get(this.props.url)
            .then(response => this.setState({news: response.data}));


    }

    renderGallery() {
        return this.state.news.map(
            (news, index) => <NewsItem key={index} news={news}/>)
    }

    render() {
        const {height, width} = Dimensions.get('window');
        if (!this.state.news) {
            return (<Spinner size='large'/>);
        }
        else {
            return (
                <View style={{
                    minHeight: 100,
                    width: width,
                }}>
                    <ScrollView>
                        {this.renderGallery()}
                    </ScrollView>
                </View>);
        }
    };
}

News.propTypes = {
    url: PropTypes.string.isRequired
};
export {News};