import React, {Component} from 'react';
import {View} from 'react-native';


class Divider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            viewStyle
        } = styles;

        return (
            <View style={[viewStyle, this.props.style]}>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        width: 1,
        height: 20,
    }
};


export {Divider};