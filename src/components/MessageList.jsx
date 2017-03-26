import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import * as firebase from 'firebase';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.valueMessage
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({messages: nextProps.valueMessage});
    }

    render() {
        const messageNodes = (this.state.messages).map((message, index) => {
            return (

                <Message message={message.text} user={message.name} userId={message.uid} userIdInfo={this.props.userIdInfo} photoUrl={message.photoUrl} key={index}></Message>

            );
        });
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Card style={{
<<<<<<< HEAD
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'width': '90vw',
                        'marginLeft': '0.7vw'
=======
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        marginLeft:30,
                        maxWidth:1150,
>>>>>>> d09951b0cd40a48841a3ed745ab41cd70909e4e6
                    }}>
                        <List>
                            {messageNodes}
                        </List>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default MessageList;
