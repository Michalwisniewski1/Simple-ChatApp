import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListItem from 'material-ui/List';

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <ListItem>{this.props.channel}</ListItem>
        );
    }
}

export default Channel;
