import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import {ArtistDetail, Spinner} from "../../src";
import PropTypes from "prop-types";

class ArtistList extends Component {

    state = {Artists: null};

    componentWillMount() {
        axios.get('http://www.mocky.io/v2/5c2498f730000051007a6050')
            .then(response => this.setState({Artists: response.data}));
    }

    renderArtists() {

        return this.state.Artists
        //     .sort(
        //     function (a, b) {
        //         let x = a.artist.toLowerCase();
        //         let y = b.artist.toLowerCase();
        //         if (x < y) {
        //             return -1;
        //         }
        //         if (x > y) {
        //             return 1;
        //         }
        //         return 0;
        //     }
        // )
            .map((albums, index) => <ArtistDetail key={index} albums={albums}> </ArtistDetail>)

    }

    render() {
        if (!this.state.Artists) {
            return (<Spinner size='large'/>);
        }
        else {
            return (
                <View>
                    <ScrollView>
                        {this.renderArtists()}
                    </ScrollView>
                </View>);
        }
    };
}

ArtistList.propTypes = {
    OnSearch: PropTypes.func,
    OpenDrawer: PropTypes.func
};
export {ArtistList};
