import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListItem from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <List>
                    <ListItem style={{
                        width: '100%'
                    }} disabled={true}>
                        <Avatar style={{
                            marginLeft: 10
                        }} src={this.props.photoUrl}/>
                        <div style={{
                            width: '100%',
                            fontSize: 11,
                            marginLeft: 30,
                            color: '#B0BEC5'
                        }}>
                            {this.props.user}

                        </div>
                        <div style={{
                            fontSize: 22,
                            marginLeft: 30
                        }}>
                            {this.props.message}
                        </div>
                    </ListItem>
                </List>
            </MuiThemeProvider>
        );
    }
}

export default Message;
