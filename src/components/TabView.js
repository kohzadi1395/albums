import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from "prop-types";

class TabView extends Component {


    state = {
        tabs: [],
        selectedTab: null,
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({tabs: this.props.tabs});
    }


    renderTabHeader() {
        if (this.state.tabs && this.state.tabs.length > 0) {
            return this.state.tabs.map((tab, index) =>
                <View>
                    <Text key={index}
                          style={[styles.textMenuStyle, tab.selected ? {color: '#737373'} : {color: '#d3d3d3'}]}
                          onPress={() => {
                              this.selectedTab(index)
                          }}>
                        {tab.title}
                    </Text>
                </View>
            );
        }
    }

    selectedTab(index) {
        for (let i = 0; i < this.state.tabs.length; i++) {
            this.state.tabs[i].selected = false;
        }
        this.state.tabs[index].selected = true;
        this.setState({selectedTab: this.state.tabs[index]});
    }

    renderTabView() {
        if (this.state.selectedTab)
            return this.state.selectedTab.body;
    }

    render() {
        const {
            containerStyle,
            headerStyle
        } = styles;

        return (

            <View style={containerStyle}>
                <View style={headerStyle}>
                    {this.renderTabHeader()}
                </View>
                <View>
                    {this.renderTabView()}
                </View>
            </View>);
    };
}

TabView.propTypes = {
    tabs: PropTypes.array.isRequired,
    selectedTab: PropTypes.array,
};

const
    styles = {
        headerStyle:
            {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#e6e6e6',
                height: 100,
            },
        containerStyle: {
            width: '100%',
        },
        textMenuStyle: {
            fontSize: 20,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 15
        },
    };
export {TabView};