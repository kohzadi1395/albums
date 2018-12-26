import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import {AlbumDetail, Header, Spinner} from "../../src";
import PropTypes from "prop-types";

class AlbumList extends Component {

    state = {albums: null};

    componentWillMount() {
        // axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        axios.get('http://www.mocky.io/v2/5c10bfbd2e0000171055b67b')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {

        return this.state.albums
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
            .map((album, index) => <AlbumDetail key={index} album={album}> </AlbumDetail>)

    }

    render() {
        if (!this.state.albums) {
            return (<Spinner size='large' />);
        }
        else {
            return (
                <View>
                    <Header OnMenu={this.props.OpenDrawer.bind(this)}/>
                    <ScrollView>
                        {this.renderAlbums()}
                    </ScrollView>
                </View>);
        }
    };
}

AlbumList.propTypes = {
    OnSearch: PropTypes.func,
    OpenDrawer: PropTypes.func
};
export {AlbumList};
