import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import trim from 'trim';
import * as firebase from 'firebase';


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

            this.props.sendMessage({
              text: evt.target.value
            });

        }
    }

    render() {
        return (
            <Card style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30
            }}>
                <textarea value={this.state.message} onChange={this.onChange.bind(this)} onKeyUp={this.onKeyUp.bind(this)} style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 14,
                    outline: 'auto 0px'
                }}/>
            </Card>
        );
    }
}

export default MessageBox;
