import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import trim from 'trim';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/communication/chat';

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
    onPressButton(evt) {
        if ((this.state.message) != '') {
            evt.preventDefault();
            this.props.sendMessage({text: this.state.message});
            this.setState({message: ''});
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card style={{
                    margin: '40px 40px',
                    padding: 30,
                    clear: 'both'
                }}>
                      <div style={{display: 'flex'}}>
                        <FloatingActionButton style={{boxShadow: 0, marginRight: '10px'}} value={this.state.message} onClick={this.onPressButton.bind(this)}>
                            <ContentAdd/>
                        </FloatingActionButton>

                        <TextField style={{}} hintText="Message Field" fullWidth={true} floatingLabelText="Type your message here" rows={2} value={this.state.message} onChange={this.onChange.bind(this)} onKeyUp={this.onKeyUp.bind(this)}></TextField>

                    </div>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default MessageBox;
