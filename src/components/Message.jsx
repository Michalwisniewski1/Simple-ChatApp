import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class Message extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        if (this.props.userIdInfo === this.props.userId) {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <List style={{
                        'maxWidth': '80vw',
                        wordWrap: 'break-word'
                    }}>
                        <ListItem primaryText={this.props.message} secondaryText={this.props.user} leftAvatar={<Avatar src = {
                            this.props.photoUrl
                        } />} rightIcon={<CommunicationChatBubble />}/>
                    </List>
                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <List style={{
                        'maxWidth': '80vw',
                        'backgroundColor': '#0097A7',
                        'wordWrap': 'break-word'
                    }}>
                        <ListItem primaryText={this.props.message} secondaryText={this.props.user} rightAvatar={<Avatar src = {
                            this.props.photoUrl
                        } />} leftIcon={<CommunicationChatBubble />}/>
                    </List>
                </MuiThemeProvider>
            )
        }
    }
}

export default Message;
