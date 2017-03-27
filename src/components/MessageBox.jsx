import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import trim from 'trim';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    onChange(evt) {
        this.setState({message: evt.target.value});
    }

    onKeyUp(evt) {
        if (evt.keyCode === 13 && trim(evt.target.value) != '') {
            evt.preventDefault();
            this.props.sendMessage({text: evt.target.value});
            this.setState({message: ''});

        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card style={{
                    maxWidth: 1200,
                    margin: '30px auto',
                    padding: 30
                }}>
                    <TextField fullWidth={true} hintText="Message Field" floatingLabelText="Type your message here" rows={2} value={this.state.message} onChange={this.onChange.bind(this)} onKeyUp={this.onKeyUp.bind(this)}></TextField>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default MessageBox;
