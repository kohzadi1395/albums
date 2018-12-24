import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Drawer} from 'native-base';
import {AlbumList, SideBar} from "../../src";

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
                content={<SideBar/>}
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