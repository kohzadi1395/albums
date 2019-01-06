import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import {Spinner, TmpArtistDetail} from "../../src";
import PropTypes from "prop-types";

class tmpArtistList extends Component {

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
            .map((albums, index) => <TmpArtistDetail key={index} albums={albums}> </TmpArtistDetail>)

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

tmpArtistList.propTypes = {
    OnSearch: PropTypes.func,
    OpenDrawer: PropTypes.func
};
export {tmpArtistList};
