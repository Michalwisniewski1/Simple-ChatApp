import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListItem from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Login from './Login.jsx';
class Message extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <List>
                    <ListItem key={this.props.key} style = {{width: '100%'}} disabled={true}><Avatar src={this.props.photoUrl} />
                        <div>
                            {this.props.message}
                          </div>
                        <div>
                          {this.props.user}
                        </div>
                    </ListItem>
                </List>
            </MuiThemeProvider>
        );
    }
}

export default Message;
