import React, {Component} from 'react';
import {Drawer} from 'native-base';
import {AlbumList, Artist, SideBar} from "../../src";

export class HomeScreen extends Component {

    state = {
        currentPage: null,
    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<SideBar onMenuSelect={this.setCurrentPage.bind(this)}/>}
                panOpenMask={0.80}
                onClose={this.closeDrawer}
                onOpen={this.openDrawer}
                captureGestures="open"
                side="left">
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
        else if (this.state.currentPage === 'artist')
        {
            this.closeDrawer();
            return( <Artist/>);
        }
    }

}