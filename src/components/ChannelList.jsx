import React from 'react';
import ReactDOM from 'react-dom';
import Channel from './Channel.jsx';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: ['Kanał1', 'chat']
        };
    }

    render() {
        var channelNodes = this.state.channels.map((channel) => {
            return (<Channel channel={channel}/>);
        });

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card style={{
                    flexGrow: 1
                }}>
                    <List>
                        {channelNodes}
                    </List>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default ChannelList;
