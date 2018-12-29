import React, {Component} from 'react';
import {Text, View, StyleSheet, Image,FlatList,Alert} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import PropTypes from 'prop-types';



class ArtistDetail extends Component {


    render() {

        const {
            FirstCharFirstName,
            data
        } = this.props.albums;

        const {
            thumbnailStyle,
            AvatarStyle,
            SectionListItemS,
            SectionListItemContainer
        } = styles;

        return (
            <View>
                <LinearGradient style={{
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    borderWidth: 1
                }}
                                colors={[
                                    "#1e3557",
                                    "#1e3557",
                                ]}
                    // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                    <View style={AvatarStyle}>
                        <Text>
                            {FirstCharFirstName}
                        </Text>
                    </View>
                </LinearGradient>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({item}) => <View style={SectionListItemContainer}>
                        <Image source={{uri: item.thumbnail_image}} style={thumbnailStyle}/>
                        <Text style={SectionListItemS}> {item.artist} </Text>

                    </View>}
                />
            </View>
        );
    }
}

ArtistDetail.propTypes = {
    albums: PropTypes.node
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    SectionHeader: {
        backgroundColor: '#f67e23',
        fontSize: 20,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    SectionListItemS: {
        flex:1, fontSize: 16,
        padding: 6,
        color: '#000',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    AvatarStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    AvatarTextStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'

    }, thumbnailStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin:5,

    },
    SectionListItemContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        backgroundColor: '#F5F5F5',
    },
});

export {ArtistDetail};
