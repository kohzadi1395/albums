import React, {Component} from 'react';
import Sidebar from "./SideBar";
import {Drawer} from 'native-base';
import {AlbumList} from "./AlbumList";

export class HomeScreen extends Component {

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
                content={<Sidebar/>}
                panOpenMask={0.80}
                onClose={this.closeDrawer}
                onOpen={this.openDrawer}
                captureGestures="open"
                side="left">
                <AlbumList/>
            </Drawer>
        );
    }
}