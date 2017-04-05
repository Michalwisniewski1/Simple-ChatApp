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
                    <div style={{
                        'display': 'flex',
                        'alignItems': 'flex-start',
                        'justifyContent': 'flex-start'
                    }}>
                        <List style={{
                            'minWidth': '60vw',
                            'maxWidth': '80vw',
                            'wordWrap': 'break-word',
                            'marginTop': '3px'
                        }}>
                            <ListItem style={{
                                display: 'block',
                                clear: 'both'
                            }} primaryText={this.props.message} secondaryTextLines={2} secondaryText={<p> <span>
                                {this.props.user}</span> <br /> {
                                this.props.date
                            } </p>} leftAvatar={<Avatar src = {
                                this.props.photoUrl
                            } />}/>
                        </List>
                    </div>
                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <div style={{
                        'display': 'flex',
                        'alignItems': 'flex-end',
                        'justifyContent': 'flex-end'

                    }}>
                        <List style={{
                            'minWidth': '60vw',
                            'maxWidth': '80vw',
                            'backgroundColor': '#37474F',
                            'wordWrap': 'break-word',
                            'borderRadius': '20px',
                            'marginTop': '3px'
                        }}>
                            <ListItem style={{
                                display: 'block',
                                clear: 'both',
                                float: 'right'
                            }} primaryText={this.props.message} secondaryTextLines={2} secondaryText={<p style = {{'display': 'block', 'clear': 'both', 'float': 'right'}} > <span style={{
                                color: 'darkBlack'
                            }}>
                                {this.props.user}</span> <br /> {
                                this.props.date
                            } </p>} rightAvatar={<Avatar src = {
                                this.props.photoUrl
                            } />}/>
                        </List>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

export default Message;
