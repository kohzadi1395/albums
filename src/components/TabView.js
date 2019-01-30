import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from "prop-types";
import axios from "axios";
import {NewsItem} from "./NewsItem";

class TabView extends Component {

    state = {
        tabs: [],
        selectedTab: null,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.setState({tabs: this.props.tabs});

        axios.get('http://www.mocky.io/v2/5c3ada352e00004f006487ed')
            .then(response => this.setState({news: response.data}))
            .catch(function (error) {
                console.log(error);
                Alert.alert('error', error);
            });

    }

    renderTabHeader() {
        if (this.state.tabs && this.state.tabs.length > 0) {
            if (!this.state.selectedTab)
                this.setState({selectedTab: this.state.tabs[0]});

            return this.state.tabs.map((tab, index) =>
                <View key={index + 1000}>
                    <Text style={[styles.textMenuStyle, tab.selected ? {color: '#737373'} : {color: '#d3d3d3'}]}
                          onPress={() => {
                              this.selectedTab(index)
                          }}
                    >
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
        // if (this.state.selectedTab)
        //     return <Text>{this.state.selectedTab.title}</Text>;
        // return <Text>{this.state.tabs[0].title}</Text>;
        // return <Text style={styles.textMenuStyle}>Newssssss</Text>
        return this.News.bind(this);
    }

    News() {
        // if (!this.state.news && this.state.news.size() > 0)
        return this.state.news.map((news, index) => <NewsItem key={index} news={news}> </NewsItem>)
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
                    {this.News.bind(this)}
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
            fontSize: 50,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 15
        },

    };
export {TabView};