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
                <ListItem disabled={true} leftAvatar={<Avatar src="http://ulubionykolor.pl/images/normal/14032013/7e0d11cfbc4b4b870ed9e990614032013124851.jpg" />}>
                    {this.props.message}
                </ListItem>
              </List>
            </MuiThemeProvider>
        );
    }
}

export default Message;
