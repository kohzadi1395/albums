import React, {Component} from 'react';
import {Drawer} from 'native-base';
import {AlbumList, Artist, Header, SideBar} from "../../src";
import {getUserTheme} from "../Utilities/UtilityStringFunc";

export class HomeScreen extends Component {




    state = {
        currentPage: null,
        Theme:null
    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    backgroundColor: any;
    fontColor: any;

    componentWillMount() {
        getUserTheme().then(data => {
            this.setState({
                Theme: data
            });
        });
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
                <Header OnMenu={this.openDrawer.bind(this)} backgroundColor={this.backgroundColor}
                        fontColor={this.fontColor}/>
                {
                    this.ShowSelectedPage()
                }
            </Drawer>
        );
    }

    setCurrentPage(page) {
        this.setState({currentPage: page});
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
    }

}