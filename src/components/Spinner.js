import React, {Component} from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import PropTypes from "prop-types";


class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            container,
            horizontal
        } = styles;

        return (
            <View style={[container, horizontal]}>
                <ActivityIndicator
                    size={this.props.size}
                    color={this.props.color}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

Spinner.defaultProps = {
    color: '#1e3557',
    size: 'large'
};
export {Spinner};