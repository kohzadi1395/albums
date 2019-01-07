import React, {Component} from 'react';
import {Drawer} from 'native-base';
import {AlbumList, Artist, Header, SideBar} from "../../src";
import {Capitalize, getUserTheme} from "../Utilities/UtilityStringFunc";
import {Alert, BackHandler} from "react-native";

export class HomeScreen extends Component {

    state = {
        currentPage: null,
        Theme: null,
        backClickCount: 0,

    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    backgroundColor: any;
    fontColor: any;

    backPressed = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => BackHandler.exitApp()},
            ],
            {cancelable: false});
        return true;
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
        getUserTheme().then(data => {
            this.setState({
                Theme: data
            });
        });
    }

    setCurrentPage(page) {
        this.setState({currentPage: page});
    }

    render() {

        if (this.state.Theme) {
            this.backgroundColor = this.state.Theme.backgroundColor;
            this.fontColor = this.state.Theme.fontColor;
        }
        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<SideBar onMenuSelect={this.setCurrentPage.bind(this)} backgroundColor={this.backgroundColor}
                                  fontColor={this.fontColor}/>}
                panOpenMask={0.80}
                onClose={this.closeDrawer}
                onOpen={this.openDrawer}
                captureGestures="open"
                side="left">
                <Header OnMenu={this.openDrawer.bind(this)}
                        backgroundColor={this.backgroundColor}
                        fontColor={this.fontColor}
                    // title={this.state.currentPage.toUpperCase()}
                        title={this.state.currentPage ? Capitalize(this.state.currentPage) : 'Albums'}
                />
                {
                    this.ShowSelectedPage()
                }
            </Drawer>
        );
    }

    ShowSelectedPage() {
        if (!this.state.currentPage) {
            return <AlbumList OpenDrawer={this.openDrawer.bind(this)}/>
        }
        else if (this.state.currentPage === 'artist') {
            this.closeDrawer();
            return (<Artist backgroundColor={this.backgroundColor}
                            fontColor={this.fontColor}/>);
        }
        else if (this.state.currentPage === 'albums') {
            this.closeDrawer();
            return (<AlbumList/>);
        }
        else if (this.state.currentPage === 'logout') {
            this.backPressed();
        }
    }

}